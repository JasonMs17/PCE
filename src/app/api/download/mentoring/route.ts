import Mentor from "@/models/Mentor";
import Mentoring from "@/models/Mentoring";
import SectorCategory from "@/models/SectorCategory";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    await connectToDatabase();

    const registrars = await Mentoring.find();
    const mentors = await Mentor.find();
    const mentorMap = mentors.reduce((map, mentor) => {
      map[mentor._id.toString()] = mentor.name;

      return map;
    }, {} as Record<string, string>);

    const sectorCategories = await SectorCategory.find();
    const sectorCategoryMap = sectorCategories.reduce((map, category) => {
      map[category._id.toString()] = category.name;
      return map;
    }, {} as Record<string, string>);

    const data = registrars.map((registrar) => ({
      name: registrar.name,
      email: registrar.email,
      whatsapp_number: registrar.whatsappNumber,
      university: registrar.university,
      faculty: registrar.faculty,
      major: registrar.major,
      curriculum_vitae: registrar.curriculumVitae,
      mentor: registrar.mentor ? mentorMap[registrar.mentor.toString()] : "Unknown",
      sector_category: registrar.sectorCategory ? sectorCategoryMap[registrar.sectorCategory.toString()] : "Unknown",
      createdAt: registrar.createdAt ? registrar.createdAt.toISOString() : "N/A",
      updatedAt: registrar.updatedAt ? registrar.updatedAt.toISOString() : "N/A",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Mentoring Registrar");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    const headers = new Headers();
    headers.set("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
    headers.set("Content-Disposition", "attachment; filename='mentoring_list.xlsx'");

    return new Response(buffer, { headers });
  } catch (error){
    console.error("Error generating the Excel file:", error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

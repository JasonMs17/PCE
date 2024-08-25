import ClassProgram from "@/models/ClassPrograms";
import SectorCategory from "@/models/SectorCategory";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    await connectToDatabase();

    const registrars = await ClassProgram.find();

    const sectorCategories = await SectorCategory.find();
    const sectorCategoryMap = sectorCategories.reduce((map, category) => {
      map[category._id.toString()] = category.name;
      return map;
    }, {} as Record<string, string>);

    const data = registrars.map((registrar) => ({
      id: registrar._id.toString(),
      name: registrar.name,
      email: registrar.email,
      whatsapp_number: registrar.whatsappNumber,
      university: registrar.university,
      faculty: registrar.faculty,
      major: registrar.major,
      sectorCategories: registrar.sectorCategory.map((id) => sectorCategoryMap[id.toString()] || "Unknown").join(", "),
      createdAt: registrar.createdAt.toISOString(),
      updatedAt: registrar.updatedAt ? registrar.updatedAt.toISOString() : "N/A",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Class Program Registrars");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    return new Response(buffer, {
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": 'attachment; filename="class_program_list.xlsx"',
      },
    });
  } catch (error) {
    console.error("Error generating the Excel file:", error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

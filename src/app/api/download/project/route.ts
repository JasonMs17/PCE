import Project from "@/models/Project";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    await connectToDatabase();

    const projects = await Project.find();

    const data = projects.map((project) => ({
      nama: project.nama,
      email: project.email,
      no_telp: project.no_telp,
      universitas: project.universitas,
      fakultas: project.fakultas,
      jurusan: project.jurusan,
      twibbonUrl: project.twibbonUrl || "N/A",
      createdAt: project.createdAt ? project.createdAt.toISOString() : "N/A",
      updatedAt: project.updatedAt ? project.updatedAt.toISOString() : "N/A",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Project List");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    const headers = new Headers();
    headers.set(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    headers.set(
      "Content-Disposition",
      "attachment; filename='project_list.xlsx'"
    );

    return new Response(buffer, { headers });
  } catch (error) {
    console.error("Error generating the Excel file:", error);
    return NextResponse.json({
      status: 500,
      error: true,
      message: "Something went wrong",
    });
  } finally {
    await disconnectFromDatabase();
  }
}

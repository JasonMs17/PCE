import MainEvent from "@/models/MainEvent";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

export async function GET() {
  try {
    await connectToDatabase();

    const mainEvents = await MainEvent.find();

    const data = mainEvents.map((event) => ({
      nama: event.nama,
      email: event.email,
      universitas: event.universitas,
      fakultas: event.fakultas,
      createdAt: event.createdAt ? event.createdAt.toISOString() : "N/A",
      updatedAt: event.updatedAt ? event.updatedAt.toISOString() : "N/A",
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Main Event");

    const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" });

    const headers = new Headers();
    headers.set(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    headers.set(
      "Content-Disposition",
      "attachment; filename='main_event_list.xlsx'"
    );

    return new Response(buffer, { headers });
  } catch (error instanceof Error) {
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

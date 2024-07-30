import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/utils/db";
import SectorCategory from "@/models/SectorCategory";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, order } = data;

  // Ensure order is a number
  if (isNaN(order)) {
    return NextResponse.json({ status: 400, error: true, message: "Invalid order value" });
  }

  try {
    await connectToDatabase();

    const sector_category = new SectorCategory({ name, order });
    await sector_category.save();
    return NextResponse.json({ status: 200, error: false, message: "Data stored successfully", sector_category });
  } catch (error) {
    console.log("error: ", error);

    return NextResponse.json({ status: 501, error: true, message: "Something went wrong" });
  }
}

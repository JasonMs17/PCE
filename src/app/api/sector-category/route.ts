import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/utils/db";
import SectorCategory from "@/models/SectorCategory";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name } = data;

  try {
    await connectToDatabase();

    const sector_category = new SectorCategory({ name });

    await sector_category.save();
    return NextResponse.json({ status: 200, error: false, message: "Data stored successfully", sector_category });
  } catch (error) {
    console.log("error: ", error);

    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const data = await SectorCategory.find();

    return NextResponse.json({ status: 200, error: false, message: "Data found successfully", data });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  }
}

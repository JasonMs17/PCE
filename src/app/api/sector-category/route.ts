import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import SectorCategory from "@/models/SectorCategory";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, quota } = data;

  if (isNaN(quota)) {
    NextResponse.json({ status: 400, error: true, message: "The quota must a number" });
  }

  try {
    await connectToDatabase();

    const sector_category = new SectorCategory({ name, quota });

    await sector_category.save();
    return NextResponse.json({ status: 200, error: false, message: "Data stored successfully", sector_category });
  } catch (errorinstanceOf Error){
    console.log("error: ", error);

    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const data = await SectorCategory.find().lean();

    return NextResponse.json({ status: 200, error: false, message: "Data found successfully", data });
  } catch (error instanceOf Error) {
    console.log("error", error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong,"+error });
  } finally {
    await disconnectFromDatabase();
  }
}

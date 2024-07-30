import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/utils/db";
import ClassProgram from "@/models/ClassPrograms";
import SectorCategory from "@/models/SectorCategory";
import SectorCategories from "@/utils/constant";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, whatsappNumber, university, faculty, major, sectorCategory } = data;

  const isValidCategory = SectorCategories.some((category) => category.name === sectorCategory);

  if (!isValidCategory) {
    return NextResponse.json({ status: 400, error: true, message: "Invalid sector category" });
  }

  try {
    await connectToDatabase();

    const isRegistered = await ClassProgram.findOne({ email }).select("email");

    if (isRegistered) {
      return NextResponse.json({ status: 400, error: true, message: "You have registered for this event" });
    }

    const sectorCategoryData = await SectorCategory.findOne({ name: sectorCategory }).select("_id");

    if (!sectorCategoryData) {
      return NextResponse.json({ status: 400, error: true, message: "Sector category not found" });
    }

    const sectorCategoryId = sectorCategoryData._id;
    const classProgram = new ClassProgram({ name, email, whatsappNumber, university, faculty, major, sectorCategory: sectorCategoryId });

    await classProgram.save();

    return NextResponse.json({ status: 200, error: false, message: "Registration successful", classProgram });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({ status: 501, error: true, message: "Something went wrong" });
  }
}

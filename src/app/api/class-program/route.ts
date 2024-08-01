import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import ClassProgram from "@/models/ClassPrograms";
import SectorCategory from "@/models/SectorCategory";
import { SectorCategories } from "@/utils/constant";
import rateLimit from "@/utils/rateLimit";
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, whatsappNumber, university, faculty, major, sectorCategory } = data;

  const rateLimitResult = await rateLimit(req);

  if (!rateLimitResult.success) {
    return NextResponse.json({ status: 400, error: true, message: "Too many requests, please try again later.", rateLimitResult });
  }
  const validCategories = SectorCategories.map((category) => category.name);

  const invalidCategories = Array.isArray(sectorCategory) ? sectorCategory.some((cat) => !validCategories.includes(cat)) : !validCategories.includes(sectorCategory);

  if (invalidCategories) {
    return NextResponse.json({ status: 400, error: true, message: "Invalid sector category" });
  }

  try {
    await connectToDatabase();

    const isRegistered = await ClassProgram.findOne({ email }).select("email");

    if (isRegistered) {
      return NextResponse.json({ status: 400, error: true, message: "You have registered for this event" });
    }

    const sectorCategoryData = await SectorCategory.find({ name: { $in: sectorCategory } }).select("_id");
    const sectorCategoryIds = sectorCategoryData.map((category) => category._id);

    if (!sectorCategoryIds) {
      return NextResponse.json({ status: 400, error: true, message: "Sector category not found" });
    }

    const classProgram = new ClassProgram({ name, email, whatsappNumber, university, faculty, major, sectorCategory: sectorCategoryIds });

    await classProgram.save();

    return NextResponse.json({ status: 200, error: false, message: "Registration successful", classProgram });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const data = await ClassProgram.find().populate("sectorCategory");

    if (!data) {
      return NextResponse.json({ status: 400, error: true, message: "Data is empty" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data found", data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

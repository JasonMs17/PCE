import Mentor from "@/models/Mentor";
import SectorCategory from "@/models/SectorCategory";
import { SectorCategories } from "@/utils/constant";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import rateLimit from "@/utils/rateLimit";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const { name, email, quota, sectorCategory } = data;

  //rate limit to call this request
  const rateLimitResult = await rateLimit(request);

  if (!rateLimitResult.success) {
    return NextResponse.json({ status: 400, error: true, message: "Too many requests, please try again later.", rateLimitResult });
  }

  if (isNaN(quota)) {
    NextResponse.json({ status: 400, error: true, message: "The quota must a number" });
  }

  const validCategories = SectorCategories.some((category) => {
    return category.name === sectorCategory;
  });

  if (!validCategories) {
    return NextResponse.json({ status: 400, error: true, message: "Invalid sector category" });
  }

  try {
    await connectToDatabase();

    //fetch sector category by its name
    const sectorCategoryId = await SectorCategory.findOne({ name: sectorCategory }).select("_id");

    if (!sectorCategoryId) {
      return NextResponse.json({ status: 400, error: true, message: "Data not found with the given sector category" });
    }

    //create new mentor
    const newMentor = new Mentor({ name, email, quota, sectorCategory: sectorCategoryId });

    await newMentor.save();

    return NextResponse.json({ status: 200, error: false, message: "Data created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function GET(request : NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const sectorCategoryName = searchParams.get('sector');

    const mentors = await Mentor.find().populate('sectorCategory').lean();

    if (!mentors) {
      return NextResponse.json({ status: 400, error: true, message: "Data is empty" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data found", mentors });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong,"+error });
  } 
}

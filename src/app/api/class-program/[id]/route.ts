import ClassProgram from "@/models/ClassPrograms";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";
import { SectorCategories } from "@/utils/constant";
import SectorCategory from "@/models/SectorCategory";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connectToDatabase();

    const data = await ClassProgram.findById(id).populate("sectorCategory");

    if (!data) {
      return NextResponse.json({ status: 400, error: true, message: "Data is empty" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data found", data });
  } catch (error instanceof Error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const data = await request.json();
  const { name, email, whatsappNumber, university, faculty, major, sectorCategory } = data;
  const validCategories = SectorCategories.map((category) => category.name);
  const now = new Date(Date.now());

  const invalidCategories = Array.isArray(sectorCategory) ? sectorCategory.some((cat) => !validCategories.includes(cat)) : !validCategories.includes(sectorCategory);

  if (invalidCategories) {
    return NextResponse.json({ status: 400, error: true, message: "Invalid sector category" });
  }

  try {
    await connectToDatabase();

    const sectorCategoryData = await SectorCategory.find({ name: { $in: sectorCategory } }).select("_id");
    const sectorCategoryIds = sectorCategoryData.map((category) => category._id);

    const filter = { _id: id };
    const update = {
      $set: {
        name,
        email,
        whatsappNumber,
        university,
        faculty,
        major,
        sectorCategory: sectorCategoryIds,
        updatedAt: now,
      },
    };

    const result = await ClassProgram.updateOne(filter, update);

    if (result.matchedCount === 0) {
      return NextResponse.json({ status: 400, error: true, message: "No data found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data updated successfully", result });
  } catch (error instanceof Error) {
    console.error("Error : ", error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connectToDatabase();

    const result = await ClassProgram.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json({ status: 400, error: true, message: "No data found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data deleted successfully", result });
  } catch (error instanceof Error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

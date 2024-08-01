import Mentor from "@/models/Mentor";
import SectorCategory from "@/models/SectorCategory";
import { SectorCategories } from "@/utils/constant";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const data = await Mentor.findById(id).populate("sectorCategory");

    if (!data) {
      return NextResponse.json({ status: 400, error: true, message: "Data is empty" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data found successfully", data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const data = await request.json();
  const now = new Date(Date.now());

  const { name, email, quota, bookedSlots, sectorCategory } = data;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
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
    console.log(sectorCategoryId);

    if (!sectorCategoryId) {
      return NextResponse.json({ status: 400, error: true, message: "Data not found with the given sector category" });
    }

    const filter = { _id: id };
    const update = {
      $set: {
        name,
        email,
        quota,
        bookedSlots,
        sectorCategory: sectorCategoryId,
        updatedAt: now,
      },
    };

    //update data mentor
    const result = await Mentor.updateOne(filter, update);

    if (result.matchedCount === 0) {
      return NextResponse.json({ status: 400, error: true, message: "No data found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data updated successfully", result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const result = await Mentor.deleteOne().where({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json({ status: 400, error: true, message: "No data found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data deleted successfully", result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

import SectorCategory from "@/models/SectorCategory";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connectToDatabase();

    const data = await SectorCategory.findById(id).populate("sectorCategory");

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
  const { name, quota } = await request.json();
  const now = new Date(Date.now());

  if (isNaN(quota)) {
    NextResponse.json({ status: 400, error: true, message: "The quota must a number" });
  }
  console.log(quota);

  try {
    await connectToDatabase();
    const filter = { _id: id };
    const update = {
      $set: {
        name,
        quota,
        updatedAt: now,
      },
    };

    const result = await SectorCategory.updateOne(filter, update);

    if (result.matchedCount === 0) {
      return NextResponse.json({ status: 400, error: true, message: "No data found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data updated successfully", result });
  } catch (error instanceof Error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await connectToDatabase();

    const result = await SectorCategory.deleteOne({ _id: id });

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

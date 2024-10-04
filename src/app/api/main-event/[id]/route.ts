import MainEvent from "@/models/MainEvent";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const data = await MainEvent.findById(id);

    if (!data) {
      return NextResponse.json({ status: 400, error: true, message: "Data is empty" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data found successfully", data });
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
  const now = new Date(Date.now());

  const { nama, email, universitas, fakultas } = data;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const filter = { _id: id };
    const update = {
      $set: {
        nama,
        email,
        universitas,
        fakultas,
        updatedAt: now,
      },
    };

    const result = await MainEvent.updateOne(filter, update);

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

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const result = await MainEvent.deleteOne({ _id: id });

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
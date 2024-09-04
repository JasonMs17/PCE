import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import Article from "@/models/Article";

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const data = await request.json();
  const now = new Date(Date.now());

  const { title, body, thumbnail, author, isPublished } = data;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const filter = { _id: id };
    const update = {
      $set: {
        title,
        body,
        thumbnail,
        author,
        isPublished,
        updatedAt: now,
      },
    };

    const result = await Article.updateOne(filter, update);

    if (result.matchedCount === 0) {
      return NextResponse.json({ status: 400, error: true, message: "No article found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Article updated successfully", result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

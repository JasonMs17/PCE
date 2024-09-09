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

export async function GET(req: NextRequest, { params }) {
    const { id } = params;

    try {
        await connectToDatabase();

        const article = await Article.findById(id);

        if (!article) {
            return NextResponse.json({
                status: 404,
                error: true,
                message: "Article not found"
            });
        }

        return NextResponse.json({
            status: 200,
            error: false,
            message: "Article successfully fetched",
            article
        });
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({
            status: 500,
            error: true,
            message: "An error occurred while fetching the article"
        });
    } finally {
        await disconnectFromDatabase();
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const result = await Article.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json({ status: 404, error: true, message: "No article found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}
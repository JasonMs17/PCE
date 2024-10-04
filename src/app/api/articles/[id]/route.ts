import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import Article from "@/models/Article";

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
  } catch (error instanceof Error) {
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

import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import Article from "@/models/Article";

export async function GET(req: NextRequest) {
    try {
        await connectToDatabase();

        const articles = await Article.find({ isPublished: true }).sort({ published_date: -1 });

        if (!articles.length) {
            return NextResponse.json({
                status: 404,
                error: true,
                message: "No published articles found"
            });
        }

        return NextResponse.json({
            status: 200,
            error: false,
            message: "Published articles successfully fetched",
            articles
        });
    } catch (error instanceof Error) {
        console.error("Error: ", error);
        return NextResponse.json({
            status: 500,
            error: true,
            message: "An error occurred while fetching published articles"
        });
    } finally {
        await disconnectFromDatabase();
    }
}


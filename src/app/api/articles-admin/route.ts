import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import Article from "@/models/Article";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { title, body, thumbnail, author, isPublished = false } = data;

    try {
        await connectToDatabase();

        const newArticle = new Article({
            title,
            body,
            thumbnail,
            author,
            isPublished
        });

        await newArticle.save();

        return NextResponse.json({
            status: 200,
            error: false,
            message: "Artikel berhasil disimpan",
            newArticle
        });
    } catch(error) {
        console.error("Error: ", error);
        return NextResponse.json({
            status: 500,
            error: true,
            message: "Terjadi kesalahan"
        });
    } finally {
        await disconnectFromDatabase();
    }
}

export async function GET(req: NextRequest) {
    try {
        await connectToDatabase();

        const articles = await Article.find().sort({ published_date: -1 });

        if (!articles.length) {
            return NextResponse.json({
                status: 404,
                error: true,
                message: "No articles found"
            });
        }

        return NextResponse.json({
            status: 200,
            error: false,
            message: "Articles successfully fetched",
            articles
        });
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({
            status: 500,
            error: true,
            message: "An error occurred while fetching articles"
        });
    } finally {
        await disconnectFromDatabase();
    }
}

// export async function GET(req: NextRequest) {
//     const { searchParams } = new URL(req.url);
//     const isPublished = searchParams.get('published') === 'true';
//     const id = searchParams.get('id');

//     try {
//         await connectToDatabase();

//         let query = {};

//         if (isPublished) {
//             query = { ...query, isPublished };
//         }

//         if (id) {
//             query = { ...query, _id: new Types.ObjectId(id) };
//         }

//         const articles = await Article.find(query).sort({ published_date: -1 });

//         if (!articles.length) {
//             return NextResponse.json({
//                 status: 404,
//                 error: true,
//                 message: "Artikel tidak ditemukan"
//             });
//         }

//         return NextResponse.json({
//             status: 200,
//             error: false,
//             message: "Artikel berhasil ditemukan",
//             articles
//         });
//     } catch (error ) {
//         console.error("Error: ", error);
//         return NextResponse.json({
//             status: 500,
//             error: true,
//             message: "Terjadi kesalahan"
//         });
//     } finally {
//         await disconnectFromDatabase();
//     }
// }


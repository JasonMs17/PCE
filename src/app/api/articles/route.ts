import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import Article from "@/models/Article";
import { Types } from "mongoose";

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
    } catch (error) {
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
//     } catch (error) {
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

export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { id, title, body, thumbnail, author, isPublished } = data;

    if (!id) {
        return NextResponse.json({
            status: 400,
            error: true,
            message: "ID artikel diperlukan untuk memperbarui artikel"
        });
    }

    try {
        await connectToDatabase();

        const updatedArticle = await Article.findByIdAndUpdate(
            id,
            { title, body, thumbnail, author, isPublished },
            { new: true, runValidators: true }
        );

        if (!updatedArticle) {
            return NextResponse.json({
                status: 404,
                error: true,
                message: "Artikel tidak ditemukan"
            });
        }

        return NextResponse.json({
            status: 200,
            error: false,
            message: "Artikel berhasil diperbarui",
            updatedArticle
        });
    } catch (error) {
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

export async function DELETE(req: NextRequest) {
    const { id } = await req.json();

    if (!id) {
        return NextResponse.json({
            status: 400,
            error: true,
            message: "ID artikel diperlukan untuk menghapus artikel"
        });
    }

    try {
        await connectToDatabase();

        const deletedArticle = await Article.findByIdAndDelete(id);

        if (!deletedArticle) {
            return NextResponse.json({
                status: 404,
                error: true,
                message: "Artikel tidak ditemukan"
            });
        }

        return NextResponse.json({
            status: 200,
            error: false,
            message: "Artikel berhasil dihapus",
            deletedArticle
        });
    } catch (error) {
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

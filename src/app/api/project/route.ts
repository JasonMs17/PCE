import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "@/utils/db";
import Project from "@/models/Project";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { nama, email, no_telp, universitas, fakultas, jurusan, twibbon } = data;

    try {
        await connectToDatabase();

        const project = new Project({ nama, email, no_telp, universitas, fakultas, jurusan, twibbon });
        await project.save();
        return NextResponse.json({ status: 200, error: false, message: "Data stored successfully", project });
    } catch (error) {
        console.log("error: ", error);

        return NextResponse.json({ status: 501, error: true, message: "Something went wrong" });
    }
}

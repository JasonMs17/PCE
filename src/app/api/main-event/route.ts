import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import MainEvent from "@/models/MainEvent";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { nama, email, universitas, fakultas } = data;

    try {
        await connectToDatabase();

        const main_event = new MainEvent({ nama, email, universitas, fakultas });
        await main_event.save();
        return NextResponse.json({ status: 200, error: false, message: "Data stored successfully", main_event });
    } catch (error) {
        console.log("error: ", error);

        return NextResponse.json({ status: 501, error: true, message: "Something went wrong" });
    }
}

export async function GET() {
    try {
        await connectToDatabase();

        const data = await MainEvent.find();

        if (!data) {
            return NextResponse.json({ status: 400, error: true, message: "Data is empty" });
        }

        return NextResponse.json({ status: 200, error: false, message: "Data found", data });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
    } finally {
        await disconnectFromDatabase();
    }
}

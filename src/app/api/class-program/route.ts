import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import ClassProgram from "@/models/ClassPrograms";
import SectorCategory from "@/models/SectorCategory";
import { SectorCategories } from "@/utils/constant";
import rateLimit from "@/utils/rateLimit";
// import transporter from "@/utils/email";
// import EmailClassProgram from "@/app/components/email/class-program";
// import { renderToStaticMarkup } from "react-dom/server";
// import React from "react";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const name = formData.get('nama');
  const email = (formData.get('email') ?? '').toString().toLowerCase();
  const whatsappNumber = formData.get('no');
  const university = formData.get('univ');
  const faculty = formData.get('fakultas');
  const major = formData.get('jurusan');
  const sectorCategory = [formData.get('sektor')];

  const rateLimitResult = await rateLimit(req);

  if (!rateLimitResult.success) {
    return NextResponse.json({ status: 400, error: true, message: "Too many requests, please try again later.", rateLimitResult });
  }

  try {
    await connectToDatabase();

    const isRegistered = await ClassProgram.findOne({ email }).select("email");

    if (isRegistered) {
      return NextResponse.json({
        status: 400,
        error: true,
        message: "Kamu sudah terdaftar di Class Program! Jangan lupa cek email dahulu.",
      });
    }

    const sectorCategoryData = await SectorCategory.find({ name: { $in: sectorCategory } }).select("_id theme");
    const sectorCategoryIds = sectorCategoryData.map((category) => category._id);
    const sectorCategoryTheme: string = sectorCategoryData.map((category) => category.theme).join(', ');

    if (!sectorCategoryIds) {
      return NextResponse.json({ status: 400, error: true, message: "Sector category not found or invalid" });
    }

    const classProgram = new ClassProgram({
      name,
      email,
      whatsappNumber,
      university,
      faculty,
      major,
      sectorCategory: sectorCategoryIds,
    });

    // const template = EmailClassProgram(
    //   typeof sectorCategory[0] === 'string' ? sectorCategory[0] : (sectorCategory[0] as File).name,
    //   sectorCategoryTheme
    // );

    // const mailOption = {
    //   from: process.env.NODEMAIL,
    //   to: email,
    //   subject: "Class Program Registration in Padjadjaran Career Expo 2024",
    //   html: template,
    // };

    // const send = await transporter.sendMail(mailOption);
    // console.log(send.messageId);

    await classProgram.save();

    return NextResponse.json({
      status: 200,
      error: false,
      message: "Registrasi Class Program berhasil",
      classProgram,
    });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({
      status: 500,
      error: true,
      message: "Something went wrong, " + error,
    });
  }
}


export async function GET() {
  try {
    await connectToDatabase();

    const data = await ClassProgram.find().populate("sectorCategory");

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

export async function DELETE(request: NextRequest) {

  try {

    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");

  

    if (!id) {

      return NextResponse.json({

        status: 400,

        error: true,

        message: "Data ID is required",

      });

    }

  

    await connectToDatabase();

  

    const deletedData = await ClassProgram.findByIdAndDelete(id);

  

    if (!deletedData) {

      return NextResponse.json({

        status: 404,

        error: true,

        message: "Data not found",

      });

    }

  

    return NextResponse.json({

      status: 200,

      error: false,

      message: "Data deleted successfully",

    });

  } catch (error) {

    console.error("Error during DELETE request:", error);

    return NextResponse.json({

      status: 500,

      error: true,

      message: "Something went wrong",

    });

  } finally {

    await disconnectFromDatabase();

  }

}



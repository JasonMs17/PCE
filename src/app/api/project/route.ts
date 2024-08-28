import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/Project";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import axios from "axios";
import FormData from "form-data";
import { Buffer } from "buffer"; 

const MAX_FILE_SIZE_MB = 1;
const ALLOWED_EXTENSIONS = ["image/png", "image/jpeg", "image/jpg"];

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const nama = form.get("nama");
    const email = form.get("email");
    const no_telp = form.get("no_telp");
    const universitas = form.get("universitas");
    const fakultas = form.get("fakultas");
    const jurusan = form.get("jurusan");
    const file = form.get("twibbonUrl") as File;

    if (!file) {
      console.error("No file provided");
      return NextResponse.json({
        status: 400,
        error: true,
        message: "No file provided",
      });
    }

    // Validasi
    if (!ALLOWED_EXTENSIONS.includes(file.type)) {
      console.error("Invalid file type");
      return NextResponse.json({
        status: 400,
        error: true,
        message: "Invalid file type",
      });
    }

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      console.error("File size exceeds the limit");
      return NextResponse.json({
        status: 400,
        error: true,
        message: `File size exceeds ${MAX_FILE_SIZE_MB} MB limit.`,
      });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const formData = new FormData();
    formData.append("image", buffer, file.name);

    const imgbbUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.IMGBB_API_KEY}`;

    const imgdbResponse = await axios.post(
      imgbbUrl,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    console.log("Image Upload Response:", imgdbResponse.data);

    const twibbonUrl = imgdbResponse.data.data.url;

    await connectToDatabase();

    const newProject = new Project({
      nama,
      email,
      no_telp,
      universitas,
      fakultas,
      jurusan,
      twibbonUrl,
    });

    await newProject.save();

    return NextResponse.json({
      status: 200,
      error: false,
      message: "Project registered successfully",
      newProject
    });
  } catch (error: any) {
    console.error("Error during processing:", error.message);
    let errorMessage = "Something went wrong";

    if (error.response && error.response.data) {
      // cek error imgbb
      errorMessage = error.response.data.error.message || errorMessage;
    }

    return NextResponse.json({
      status: 500,
      error: true,
      message: errorMessage,
    });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function GET(request: NextRequest) {
  try {
    await connectToDatabase();

    const data = await Project.find();

    if (!data || data.length === 0) {
      return NextResponse.json({
        status: 404,
        error: true,
        message: "Data is empty",
      });
    }

    return NextResponse.json({
      status: 200,
      error: false,
      message: "Data found",
      data,
    });
  } catch (error) {
    console.error("Error during GET request:", error);
    return NextResponse.json({
      status: 500,
      error: true,
      message: "Something went wrong",
    });
  } finally {
    await disconnectFromDatabase();
  }
}

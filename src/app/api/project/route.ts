import { NextRequest, NextResponse } from "next/server";
import Project from "@/models/Project";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import axios from "axios";
import FormData from "form-data";
import { Buffer } from "buffer"; 
import SectorCategory from "@/models/SectorCategory";

const MAX_FILE_SIZE_MB = 1;
const ALLOWED_EXTENSIONS = ["image/png", "image/jpeg", "image/jpg"];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const namaTim = formData.get("namaTim"); 
    const namaKetua = formData.get("namaKetua");
    const nama1 = formData.get("nama1");
    const nama2 = formData.get("nama2");
    const email = formData.get("email").toLowerCase();
    const no_telp = formData.get("no");
    const universitas = formData.get("univ");
    const fakultas = formData.get("fakultas");
    const jurusan = formData.get("jurusan");
    const sectorCategory =[ formData.get('sektor')];
    const twibbonUrl = formData.get("twibbonUrl");
    const pembayaranFile = formData.get("pembayaran") as File;

    if (!pembayaranFile) {
      console.error("No file provided");
      return NextResponse.json({
        status: 400,
        error: true,
        message: "No file provided",
      });
    }

    // Validasi
    if (!ALLOWED_EXTENSIONS.includes(pembayaranFile.type)) {
      console.error("Invalid file type");
      return NextResponse.json({
        status: 400,
        error: true,
        message: "Invalid file type, file type "+pembayaranFile.type+" are not allowed",
      });
    }

    const fileSizeMB = pembayaranFile.size / (1024 * 1024);
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      console.error("File size exceeds the limit");
      return NextResponse.json({
        status: 400,
        error: true,
        message: `File size exceeds ${MAX_FILE_SIZE_MB} MB limit.`,
      });
    }
    
    await connectToDatabase();
    
    const sectorCategoryData = await SectorCategory.find({ name: { $in: sectorCategory } }).select("_id");
    const sectorCategoryIds = sectorCategoryData.map((category) => category._id);
    
    const buffer = Buffer.from(await pembayaranFile.arrayBuffer());
    const form = new FormData();
    form.append("image", buffer, pembayaranFile.name);
    
    const imgbbUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${process.env.IMGBB_API_KEY}`;
    
    const imgdbResponse = await axios.post(
      imgbbUrl,
      form,
      {
        headers: {
          ...form.getHeaders(),
        },
      }
    );

    console.log("Image Upload Response:", imgdbResponse.data);

    const pembayaranUrl = imgdbResponse.data.data.url;
    
    const newProject = new Project({
      namaTim,
      namaKetua,
      nama1,
      nama2,
      email,
      no_telp,
      universitas,
      fakultas,
      jurusan,
      sectorCategoryIds,
      twibbonUrl,
      pembayaranUrl,
    });

    await newProject.save();

    return NextResponse.json({
      status: 200,
      error: false,
      message: "Project registered successfully, please kindly check your email",
      newProject
    });
  } catch (error: any) {
    console.error("Error during processing:", error.message);
    let errorMessage = "Something went wrong, "+error.message;

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

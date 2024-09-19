import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import ClassProgram from "@/models/ClassPrograms";
import SectorCategory from "@/models/SectorCategory";
import { SectorCategories } from "@/utils/constant";
import rateLimit from "@/utils/rateLimit";
import transporter from "@/utils/email";

export async function POST(req: NextRequest) {
  //const data = await req.json();

  const formData = await req.formData(); 

  // Extract form fields
  const name = formData.get('nama');
  const email = formData.get('email').toLowerCase();
  const whatsappNumber = formData.get('no');
  const university = formData.get('univ');
  const faculty = formData.get('fakultas');
  const major = formData.get('jurusan');
  const sectorCategory =[ formData.get('sektor')];



  const rateLimitResult = await rateLimit(req);

  if (!rateLimitResult.success) {
    return NextResponse.json({ status: 400, error: true, message: "Too many requests, please try again later.", rateLimitResult });
  }


  //ngambil sector dan mentor full dari DB saja
  // const validCategories = SectorCategories.map((category) => category.name);
  // const invalidCategories = Array.isArray(sectorCategory) ? sectorCategory.some((cat) => !validCategories.includes(cat)) : !validCategories.includes(sectorCategory);
  // if (invalidCategories) {
  //   return NextResponse.json({ status: 400, error: true, message: "Invalid sector category" });
  // }

  try {
    await connectToDatabase();

    const isRegistered = await ClassProgram.findOne({ email }).select("email");

    if (isRegistered) {
      return NextResponse.json({ status: 400, error: true, message: "You have registered for this event" });
    }

    const sectorCategoryData = await SectorCategory.find({ name: { $in: sectorCategory } }).select("_id");
    const sectorCategoryIds = sectorCategoryData.map((category) => category._id);

    

    if (!sectorCategoryIds) {
      return NextResponse.json({ status: 400, error: true, message: "Sector category not found or invalid" });
    }

    // return NextResponse.json({name, email, whatsappNumber, university, faculty, major});
    const classProgram = new ClassProgram({ name, email, whatsappNumber, university, faculty, major, sectorCategory: sectorCategoryIds });
    const template = `<p> I love Alexandra Daddario and Chelsea Islan </p>`;

    // const mailOption = {
    //   from: process.env.NODEMAIL,
    //   to: email,
    //   subject: "Class Program Registration",
    //   html: template,
    // }; 

    // const send = await transporter.sendMail(mailOption);

    // console.log(send.messageId);

    await classProgram.save();

    return NextResponse.json({ status: 200, error: false, message: "Registration successful. Please check your Email.", classProgram });
  } catch (error) {
    console.error("Error: ", error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong, "+error});
  } finally {
    await disconnectFromDatabase();
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

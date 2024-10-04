import { NextResponse, NextRequest } from "next/server";
import ClassProgram from "@/models/ClassPrograms";
import Mentor from "@/models/Mentor";
import Mentoring from "@/models/Mentoring";
import SectorCategory from "@/models/SectorCategory";
import { MentorNames, SectorCategories } from "@/utils/constant";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import transporter from "@/utils/email";
import rateLimit from "@/utils/rateLimit";
import EmailMentoring from "@/app/components/email/mentoring";

export async function POST(req: NextRequest) {
 
  const formData = await req.formData(); 

  const name = formData.get("nama");
  const email = formData.get("email").toLowerCase();
  const whatsappNumber = formData.get("no");
  const university = formData.get("univ");
  const faculty = formData.get("fakultas");
  const major = formData.get("jurusan");
  const cv = formData.get("cv");
  const sectorCategory = formData.get("sektor")
  const mentorName = formData.get("mentor");

  const rateLimitResult = await rateLimit(req);

  if (!rateLimitResult.success) {
    return NextResponse.json({ status: 400, error: true, message: "Too many requests, please try again later.", rateLimitResult });
  }

  try {
    await connectToDatabase();

    const isRegisteredClassProgram = await ClassProgram.findOne({ email });
    const sectorCategoryData = await SectorCategory.findOne({ name: sectorCategory });

    const mentorData = await Mentor.findOne({ name: mentorName });

    if (!sectorCategoryData) {
      return NextResponse.json({ status: 400, error: true, message: "Data not found with the given sector category" });
    }
    if (!mentorData) {
      return NextResponse.json({ status: 400, error: true, message: "Data not found with the given mentor name" });
    }

    if (!isRegisteredClassProgram) {
      return NextResponse.json({ status: 400, error: true, message: "Please register in our class program event first" });
    }

    const isRegistered = await Mentoring.findOne({ email }).select("email");

    if (isRegistered) {
      return NextResponse.json({ status: 400, error: true, message: "You have registered for this event" });
    }

    // const totalQuotaSector = await Mentoring.countDocuments({ sectorCategory: sectorCategoryData._id });
    const totalQuotaMentor = await Mentoring.countDocuments({ mentor: mentorData._id });

    // if (totalQuotaSector >= sectorCategoryData.quota) {
    //   return NextResponse.json({ status: 400, error: true, message: "Sector quota exceeded" });
    // }

    if (totalQuotaMentor >= mentorData.quota) {
      return NextResponse.json({ status: 400, error: true, message: "Mentor quota exceeded" });
    }

    const newMentoring = new Mentoring({
      name,
      email,
      whatsappNumber,
      university,
      faculty,
      major,
      cv,
      mentor: mentorData._id,
      sectorCategory: sectorCategoryData._id,
    });

    const template = EmailMentoring(sectorCategory, mentorName);

    const mailOption = {
      from: process.env.NODEMAIL,
      to: email,
      subject: "Mentoring 1 on 1 Registration",
      html: template,
    };

    const send = await transporter.sendMail(mailOption);

    console.log(send.messageId);

    const data = await newMentoring.save();

    return NextResponse.json({ status: 200, error: false, message: "Registered successfully", totalQuotaMentor, totalQuotaSector, data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function GET() {
  try {
    await connectToDatabase();

    const data = await Mentoring.find().populate("sectorCategory").populate("mentor");

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

  

    const deletedData = await Mentoring.findByIdAndDelete(id);

  

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
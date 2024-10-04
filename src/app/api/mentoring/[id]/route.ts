import ClassProgram from "@/models/ClassPrograms";
import Mentor from "@/models/Mentor";
import Mentoring from "@/models/Mentoring";
import SectorCategory from "@/models/SectorCategory";
import { MentorNames, SectorCategories } from "@/utils/constant";
import { connectToDatabase, disconnectFromDatabase } from "@/utils/db";
import transporter from "@/utils/email";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const data = await Mentoring.findById(id).populate("sectorCategory mentor");

    if (!data) {
      return NextResponse.json({ status: 400, error: true, message: "Data is empty" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data found", data });
  } catch (erro) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;
  const data = await request.json();
  const { name, email, whatsappNumber, schedule, university, faculty, major, mentorName, sectorCategory, curriculumVitae } = data;
  const now = new Date(Date.now());

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  const validCategory = SectorCategories.some((category) => {
    return category.name === sectorCategory;
  });

  if (!validCategory) {
    return NextResponse.json({ status: 400, error: true, message: "Invalid sector category" });
  }

  const validMentor = MentorNames.some((mentor) => {
    return mentor.name === mentorName;
  });

  if (!validMentor) {
    return NextResponse.json({ status: 400, error: true, message: "Invalid mentor name" });
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
      return NextResponse.json({ status: 400, error: true, message: "Please register this email in our class program event first" });
    }

    if (sectorCategoryData.name !== sectorCategory) {
      const totalQuotaSector = await Mentoring.countDocuments({ sectorCategory: sectorCategoryData._id });

      if (totalQuotaSector >= sectorCategoryData.quota) {
        return NextResponse.json({ status: 400, error: true, message: "Sector quota exceeded" });
      }
    }

    if (mentorData.name !== mentorName) {
      const totalQuotaMentor = await Mentoring.countDocuments({ mentor: mentorData._id });

      if (totalQuotaMentor >= mentorData.quota) {
        return NextResponse.json({ status: 400, error: true, message: "Mentor quota exceeded" });
      }
    }

    const filter = { _id: id };

    const update = {
      $set: {
        name,
        email,
        whatsappNumber,
        schedule,
        university,
        faculty,
        major,
        curriculumVitae,
        mentor: mentorData._id,
        sectorCategory: sectorCategoryData._id,
        updatedAt: now,
      },
    };

    const template = "<p> Hello my darkest side do not forget to take a bath </p>";

    const mailOption = {
      from: process.env.NODEMAIL,
      to: email,
      subject: "Mentoring 1 on 1 Registration",
      html: template,
    };

    const send = await transporter.sendMail(mailOption);

    const result = await Mentoring.updateOne(filter, update);

    if (result.matchedCount === 0) {
      return NextResponse.json({ status: 400, error: true, message: "No data found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data updated successfully", result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ status: 400, error: true, message: "Missing ID" });
  }

  try {
    await connectToDatabase();

    const result = await Mentoring.deleteOne({ _id: id });

    if (result.deletedCount === 0) {
      return NextResponse.json({ status: 400, error: true, message: "No data found with the given ID" });
    }

    return NextResponse.json({ status: 200, error: false, message: "Data deleted successfully", result });
  } catch (erro) {
    console.log(error);
    return NextResponse.json({ status: 500, error: true, message: "Something went wrong" });
  } finally {
    await disconnectFromDatabase();
  }
}

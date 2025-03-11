import { sendEmail } from "@/app/utils/sendEmail";
import { connectToDb } from "@/config/dbConfig";
import MBBS_InterestedUser from "@/models/campaign/mbbs";

import { NextResponse } from "next/server";

await connectToDb();

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, mobile, email, qualification, selectedCountry } = body;

    if (!name || !mobile || !email || !qualification || !selectedCountry) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await MBBS_InterestedUser.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 400 }
      );
    }

    const newUser = new MBBS_InterestedUser({
      name,
      mobile,
      email,
      qualification,
      selectedCountry,
    });

    await newUser.save();
    const to = process.env.EMAIL_SEND_TO;
    
    await sendEmail(to, newUser, "mbbs_Users");

    return NextResponse.json(
      { success: true, message: "Entry created successfully", data: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating entry:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // const users = await MBBS_InterestedUser.find({}).sort({ createdAt: -1 });
    const users = await MBBS_InterestedUser.find({});
    return NextResponse.json(
      { success: true, totalUsers: users.length, data: users },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching entries:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}



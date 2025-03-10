import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";
import { connectToDb } from "@/config/dbConfig";
import MBBS_InterestedUser from "@/models/campaign/mbbs";

await connectToDb();

export async function GET() {
  try {
    const users = await MBBS_InterestedUser.find({});

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("MBBS Campaign Data");

    worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Email", key: "email", width: 25 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Qualification", key: "qualification", width: 15 },
      { header: "Selected_Country", key: "selectedCountry", width: 35 },
      { header: "Enquiry At", key: "createdAt", width: 20 },
    ];

    users.forEach((user) => {
      worksheet.addRow({
        name: user.name,
        phone: user.mobile,
        email: user.email,
        qualification: user.qualification,
        selectedCountry: user.selectedCountry,
        createdAt: user.createdAt.toLocaleString("en-IN", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, // using 24-hour format
        }),
      });
    });

    const filePath = path.join(
      process.cwd(),
      "src/app/api/campaign/mbbs/export",
      "mbbs_data.xlsx"
    );

  
    await workbook.xlsx.writeFile(filePath);

    const fileStream = fs.createReadStream(filePath);

    const response = new NextResponse(fileStream, {
      headers: {
        "Content-Disposition": `attachment; filename="mbbs_data.xlsx"`,
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });

    return response;
  } catch (error) {
    console.error("Error generating Excel sheet:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error.message,
        error,
      },
      { status: 500 }
    );
  }
}
// body { mobile: "", email: "", otp: ""}
import nodemailer from "nodemailer";
const twilio = require("twilio");

export async function POST(request) {
  try {
    if (!request || typeof request.json !== "function") {
      return new Response(
        JSON.stringify({ success: false, message: "Invalid request" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { email, mobile, otp } = await request.json();

    if ((!email && !mobile) || !otp) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email/Mobile and OTP are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (email) {
      // if (!process.env.EMAIL|| !process.env.PASSWORD) {
      //   throw new Error("Gmail credentials are missing.");
      // }
      if (!process.env.MAIL_USER_ID || !process.env.MAIL_USER_PASS) {
        throw new Error("E-mail credentials are missing.");
      }

      // const transporter = nodemailer.createTransport({
      //   service: "gmail",
      //   auth: {
      //     user: process.env.EMAIL,
      //     pass: process.env.PASSWORD,
      //   },
      // });
      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.MAIL_USER_ID,
          pass: process.env.MAIL_USER_PASS,
        },
      });

      const mailOptions = {
        from: process.env.MAIL_USER_ID,
        to: email,
        subject: "Your OTP for Verification",
        html: `
        <p>
          Your OTP for verification is: <strong>${otp}</strong>.
          <br />
          Please enter this OTP on the verification page to complete the process.
          <br />
          Note: This OTP is valid for <strong>5 minutes</strong>.
        </p>
      `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`Email sent successfully to ${email}`);

      return new Response(
        JSON.stringify({ success: true, message: "Email sent successfully" }),
        { status: 201, headers: { "Content-Type": "application/json" } }
      );
    }
    if (mobile) {
      const accountSid = process.env.TWILIO_ACCOUNT_SID;
      const authToken = process.env.TWILIO_AUTH_TOKEN;
      const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

      if (!accountSid || !authToken || !twilioPhoneNumber) {
        throw new Error("Twilio credentials are missing.");
      }

      const client = twilio(accountSid, authToken);

      const message = `Your OTP for verification is: ${otp}. Please enter this OTP on the verification page to complete the process.`;


      const response = await client.messages.create({
        from: twilioPhoneNumber,
        to: "+18777804236",  //change it to mobile after buying || mobile
        body: message,
      });

      console.log("SMS sent successfully! Message SID:", response.sid);

      return new Response(
        JSON.stringify({ success: true, message: "SMS sent successfully" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
    
  } catch (error) {
    console.error("Error sending email/message:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

import nodemailer from "nodemailer";

export async function sendEmail(to, data, emailType) {
  try {
    if (!process.env.MAIL_USER_ID || !process.env.MAIL_USER_PASS) {
      throw new Error(
        "E-mail credentials are missing in environment variables."
      );
    }

    // for testing mailtrap
    // const transporter = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: process.env.MAIL_USER_ID,
    //     pass: process.env.MAIL_USER_PASS,
    //   },
    // });

    // use this below for live gmail
    // const transporter = nodemailer.createTransport({
    //   service: process.env.SERVICE,
    //   auth: {
    //     user: process.env.MAIL_USER_ID,
    //     pass: process.env.MAIL_USER_PASS,
    //   },
    // });

    // ////////// for hostinger
    const transporter = nodemailer.createTransport({
      // host: "mail.viacertaabroad.com", // Check from your email provider!
      host: "smtp.hostinger.com", // Check from your email provider!
      port: 465, // Usually 465 (SSL) or 587 (TLS)
      secure: true, // True for port 465, false for 587
      auth: {
        user: process.env.MAIL_USER_ID, // Info@viacertaabroad.com
        pass: process.env.MAIL_USER_PASS, // Your email password
      },
    });

    // --------------------------------------------------------------------------------
    let customSubject = "";
    let htmlContent = "";

    switch (emailType) {
      case "mbbs_Users":
        customSubject = `📩 New MBBS Form Submission - ${data.name} | ViaCertaAbroad`;
        htmlContent = `
            <h2 style="color: #007BFF;">New Submission Received</h2>
            <p><strong>${data.name}</strong> has just submitted the MBBS form on <strong>ViaCertaAbroad</strong>. Here are the details:</p>
            <ul>
                <li><strong>Name:</strong> ${data.name}</li>
                <li><strong>Mobile:</strong> ${data.mobile}</li>
                <li><strong>Email:</strong> ${data.email}</li>
                <li><strong>Qualification:</strong> ${data.qualification}</li>
                <li><strong>Selected Country:</strong> ${data.selectedCountry}</li>
            </ul>
            <p>Click the button below to download the latest MBBS data:</p>
            <a href="https://viacertaabroad.com/api/campaign/mbbs/export" 
               style="display: inline-block; padding: 10px 15px; background: #28a745; color: white; text-decoration: none; border-radius: 5px;">
               📥 Download Excel Data
            </a>
            <p style="margin-top: 20px; font-size: 12px; color: #666;">This is an automated notification from ViaCertaAbroad.</p>
        `;
        break;
      case "verifyOtp":
        customSubject = `🔐 Verify Your OTP - ViaCertaAbroad`;
        htmlContent = `
              <h2 style="color: #007BFF;">OTP Verification</h2>
              <p>Dear <strong>${data.existingUser.name}</strong>,</p>
              <p>Thank you for registering with <strong>ViaCertaAbroad</strong>. To complete your sign-up, please use the OTP below:</p>
              <h3 style="color: #28a745; font-size: 24px; letter-spacing: 2px;">${data.otp}</h3>
              <p><strong>Note:</strong> This OTP is valid for <strong>5 minutes</strong>. If it expires, you will need to request a new one.</p>
              <p>If you did not request this OTP, please ignore this email.</p>
              <p>For assistance, contact our support team.</p>
              <p style="margin-top: 20px; font-size: 12px; color: #666;">This is an automated email from ViaCertaAbroad. Please do not reply.</p>
          `;
        break;

      default:
        throw new Error(`Unknown emailType: ${emailType}`);
    }

    // /-----------------------------------------------------
    const mailOptions = {
      from: process.env.MAIL_USER_ID,
      to: to,
      subject: customSubject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully to ${to}`);
    return true;
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return false;
  }
}

// 2025-03-11 10:49:25
// 1852 msg

// .. 1290 total out bytes

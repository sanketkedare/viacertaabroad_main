import nodemailer from "nodemailer";

export async function sendEmail(to, data, emailType) {
  try {
    if (!process.env.MAIL_USER_ID || !process.env.MAIL_USER_PASS) {
      throw new Error(
        "E-mail credentials are missing in environment variables."
      );
    }

    // for testing
    // const transporter = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   auth: {
    //     user: process.env.MAIL_USER_ID,
    //     pass: process.env.MAIL_USER_PASS,
    //   },
    // });

    // use this below for live
    const transporter = nodemailer.createTransport({
      service: process.env.SERVICE,
      auth: {
        user: process.env.MAIL_USER_ID,
        pass: process.env.MAIL_USER_PASS,
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

import twilio from "twilio";

//   for testing on postman
let client;

if (process.env.RUNNING_ON === "test") {
  client = {
    messages: {
      create: async (message) => {
        // console.log("Mock Twilio Message:", message);
        console.log("Mock Twilio Message:");
        return { sid: "mock_message_sid" };
      },
    },
  };
} else {
  //   for production
  client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );
}

const RESPONSES = {
  WELCOME: `
🌍 Welcome to Viacerta Abroad! 🌍

Hello! We are Viacerta Abroad, a dedicated institute committed to helping students achieve their dreams of studying abroad.

🎓 **What We Offer**:

✅ Expert guidance in selecting the right university and course.
✅ Comprehensive visa support to simplify your journey.
✅ Placement assistance to help you secure the best opportunities.

📩 Want to learn more? Reply with:

1. "MORE" for detailed services.
2. "CONTACT" to speak with an expert.
3. "FAQ" for frequently asked questions.
`,

  HELP: `
🆘 Here’s how I can assist you:

1. Type "MORE" to learn about our services.
2. Type "CONTACT" to get in touch with our support team.
3. Type "FAQ" for frequently asked questions.
`,

  MORE: `
📚 Here’s more about our services:

🎓 **University Selection**: We help you choose the best universities based on your profile.
🛂 **Visa Assistance**: From documentation to interview preparation, we’ve got you covered.
💼 **Placement Support**: We assist you in finding internships and job opportunities abroad.

Reply with:
1. "CONTACT" to speak with an expert.
2. "FAQ" for frequently asked questions.
`,

  CONTACT: `
📞 You can reach us at:

📞 Phone: +1-123-456-7890
📧 Email: support@viacertaabroad.com
📍 Address: 123 Education Lane, Knowledge City.

Would you like to schedule a callback? Reply with "YES" or "NO".
`,

  FAQ: `
❓ Frequently Asked Questions:

1. How do I apply? - Reply "APPLY" for step-by-step guidance.
2. What are the fees? - Reply "FEES" for detailed information.
3. Can I get a scholarship? - Reply "SCHOLARSHIP" to learn more.

Reply with your choice or "BACK" to return to the main menu.
`,

  DEFAULT: `
😅 Sorry, I didn’t understand that.

Type "HELP" for assistance or "MORE" to learn about our services.
`,
};

const userContext = {};

export async function POST(request) {
  try {
    console.log("📩 Incoming Request Received");

    const bodyText = await request.text();
    const body = Object.fromEntries(new URLSearchParams(bodyText));
    // console.log("Body:", body);

    const incomingMessage = body.Body ? body.Body.toLowerCase() : null;
    const senderNumber = body.From;

    if (!incomingMessage || !senderNumber) {
      console.error("❌ Missing Body or From in the request!");
      return new Response(
        JSON.stringify({ error: "Missing required fields." }),
        { status: 400 }
      );
    }

    // console.log("✅ Incoming Message:", incomingMessage);
    // console.log("📞 From:", senderNumber);

    let responseMessage = RESPONSES.DEFAULT;

    if (userContext[senderNumber] === "AWAITING_CALLBACK_RESPONSE") {
      if (incomingMessage.includes("yes")) {
        responseMessage = `Great! Our team will call you shortly. 🕒
        In the meantime, feel free to explore more by typing "MORE".`;
        delete userContext[senderNumber];
      } else if (incomingMessage.includes("no")) {
        responseMessage = `No problem! Let us know if you change your mind. 😊
        Type "MORE" to explore our services.`;
        delete userContext[senderNumber];
      } else {
        responseMessage = `Please reply with "YES" or "NO" to confirm your callback request.`;
      }
    } else {
      if (incomingMessage.includes("help")) {
        responseMessage = RESPONSES.HELP;
      } else if (incomingMessage.includes("more")) {
        responseMessage = RESPONSES.MORE;
      } else if (incomingMessage.includes("contact")) {
        responseMessage = RESPONSES.CONTACT;
        userContext[senderNumber] = "AWAITING_CALLBACK_RESPONSE";
      } else if (incomingMessage.includes("faq")) {
        responseMessage = RESPONSES.FAQ;
      } else if (
        incomingMessage.includes("hello") ||
        incomingMessage.includes("hi")
      ) {
        responseMessage = RESPONSES.WELCOME;
      }
    }

    console.log("🚀 Sending Response:");
    console.log("----------------------------------");

    console.log(responseMessage);

    console.log("----------------------------------");
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: senderNumber,
      body: responseMessage,
    });

    console.log("✅ Message Sent Successfully:", message.sid);

    // return new Response(
    //   JSON.stringify({ success: true, messageSid: message.sid }),
    //   { status: 200 }
    // );
  } catch (err) {
    console.error("❌ Twilio Error:", err);
    return new Response(
      JSON.stringify({ message: "Failed to send message.", error: err }),
      { status: 500 }
    );
  }
}

export async function GET() {
  console.log("Environment", process.env.NODE_ENV);
  return new Response(
    JSON.stringify({
      message: "Viacerta Abroad WhatsApp Bot is running! 🚀",
      env: process.env.RUNNING_ON,
    }),
    { status: 200 }
  );
}

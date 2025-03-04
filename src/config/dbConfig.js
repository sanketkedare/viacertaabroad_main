import mongoose from "mongoose";

let isConnected = false;

export async function connectToDb() {
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    const connection = await mongoose.connect(process.env.MONGO_URI);

    isConnected = connection.connections[0].readyState === 1;

    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error.message);
    process.exit(1);
  }
}

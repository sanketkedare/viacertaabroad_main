import mongoose from "mongoose";

const OurStudentsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    university: { type: String, required: true },
    country: { type: String, required: true },
    scholarshipType: { type: String }, // Fully Funded, Partial, etc.
    scholarshipAmount: { type: String },
    course: { type: String },
    message: { type: String, required: false },
  },
  { timestamps: true }
);

const OurStudents =
  mongoose.models.ourstudents ||
  mongoose.model("ourstudents", OurStudentsSchema);

export default OurStudents;

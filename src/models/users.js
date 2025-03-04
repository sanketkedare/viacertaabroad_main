import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
      //   validate: {
      //     validator: validator.isEmail,
      //     message: "Not a valid email address",
      //   },
      index: true,
    },

    mobile: {
      type: String,
      required: [true, "Please enter your phone number"],
      unique: true,
      //   validate: {
      //     validator: function (value) {
      //       return /^\d{10}$/.test(value);
      //     },
      //     message: "Phone number must be 10 digits",
      //   },
    },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;

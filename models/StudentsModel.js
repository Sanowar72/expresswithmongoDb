import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "please provide id"],
    unique: true,
  },
  first_name: {
    type: String,
    required: [true, "please provide first name"],
  },
  last_name: {
    type: String,
    required: [true, "please provide first name"],
  },
  email: {
    type: String,
    required: [true, "please provide first name"],
    unique: true,
  },
  gender: {
    type: String,
    required: [true, "please provide gender"],
  },
  avatar: {
    type: String,
    required: [true, "please provide avatar link"],
  },
  domain: {
    type: String,
    required: [true, "please provide domain"],
  },
  available: {
    type: Boolean,
    required: [true, "please provide domain"],
  },
});

const studentModel = mongoose.model("users", userSchema);
export default studentModel;

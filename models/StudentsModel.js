import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide name"],
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    unique: true,
  },
  rollNo: {
    type: Number,
    unique: true,
  },
});

const studentModel = mongoose.model("Mystudents", studentSchema);
export default studentModel;

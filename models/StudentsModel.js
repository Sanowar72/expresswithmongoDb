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
  password: {
    type: String,
    required: [true, "please give password"],
  },
});

const studentModel = mongoose.model("Myfullstack", studentSchema);
export default studentModel;

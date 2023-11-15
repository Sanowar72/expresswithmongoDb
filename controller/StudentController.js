import Student from "../models/StudentsModel.js";

const Home = (req, res) => {
  res.send("this is home route");
};

const AddStudentData = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json({
      success: true,
      message: "data added successfully",
      newStudent,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message:
        "Please check rollNo this roll no may belongs to another student",
      err,
    });
  }
};

const ReadStudentData = async (req, res) => {
  try {
    const result = await Student.find().select("-__v");
    res.status(200).json({
      success: true,
      totalData: result.length,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "error in getting the data",
    });
  }
};

const GetStudentById = async (req, res) => {
  try {
    let result = await Student.findById(req.params.id).select("-__v");
    if (result) {
      return res.status(200).json({
        success: true,
        data: result,
      });
    }
    res.status(404).json({ success: false, message: "no record found" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "error in getting the data",
    });
  }
};
const UpdateById = async (req, res) => {
  try {
    const result = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-__v");
    if (result) {
      return res.status(200).json({
        success: true,
        data: result,
      });
    }
    res.status(404).json({ success: false, message: "no record found" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error in getting the data",
    });
  }
};
const DeleteById = async (req, res) => {
  try {
    const result = await Student.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(204).json({
        success: true,
        message: "successfully deleted",
      });
    }
    res.status(403).json({ success: false, message: "no record found" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error in getting the data",
    });
  }
};

export {
  Home,
  AddStudentData,
  ReadStudentData,
  GetStudentById,
  UpdateById,
  DeleteById,
};

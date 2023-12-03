import express from "express";
const app = express();
import {
  Home,
  AddStudentData,
  ReadStudentData,
  searchByName,
  filterStudents,
  GetStudentById,
  UpdateById,
  DeleteById,
} from "../../controller/StudentController.js";

const router = express.Router();

router.route("/").get(ReadStudentData).post(AddStudentData);
router.get("/search", searchByName);
router.get("/filter", filterStudents);
router.route("/:id").get(GetStudentById).put(UpdateById).delete(DeleteById);

export default router;

import express from "express";
import router from "./routes/studentRoutes/StudentRoutes.js";
import "./utils/DatabaseConnection.js";
const app = express();
app.use(express.json());
const port = 3000;

app.use("/api/vi/student", router);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

import dotenv from "dotenv";
import express from "express";
dotenv.config();
import router from "./routes/studentRoutes/StudentRoutes.js";
import "./utils/DatabaseConnection.js";
const app = express();
app.use(express.json());
import cors from "cors";

const corsOptions = {
  origin: [
    "http://localhost:4000",
    "http://localhost:5173",
    "http://localhost:4001",
  ],
  methods: "GET, POST, PUT, DELETE",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors());
const port = 3000;

app.use("/api/vi/student", router);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

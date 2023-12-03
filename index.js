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
    "http://localhost:3000",
    "http://localhost:5173",
    "http://localhost:3001",
  ],
  methods: "GET, POST, PUT, DELETE",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors());
const port = 4000;

app.use("/api/users", router);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

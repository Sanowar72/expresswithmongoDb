import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;

const url = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.5polimg.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

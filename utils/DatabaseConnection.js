import mongoose from "mongoose";
const username = "atifreza72ar";
const password = "Sonu72@r";
const databaseName = "myExpressDb";
const url = `mongodb+srv://${username}:${password}@cluster0.b1clnqa.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

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

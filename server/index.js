import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from "./routes/posts.js";

const PORT = process.env.PORT || 3001;
const app = express();


app.use(bodyParser.json({ limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(cors());
app.use('/posts', postRoutes);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernblogpost", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

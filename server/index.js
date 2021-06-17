import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import postRoutes from "./routes/posts.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const CONNECTION_URL = 'mongodb+srv://tolga92:059201Gs@cluster0.xpzpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

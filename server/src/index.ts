import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import dbConnection from "./config/dbConnection";
import authRouter from "./routes/auth.route"

const app = express();
dotenv.config()

// checking whether database is connected or not
dbConnection.connect((error) => {
  if (error) console.error("Fail to connect the Database\n", error);
  else console.log("database connected successfully");
})



app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: 'GET, POST, PUT, DELETE',
  credentials: true
}))

app.use("/auth", authRouter)

const PORT: string = process.env.PORT || "4000";

// listening the server in the metioned PORT
app.listen(PORT, () =>
  console.log("Server started running at the PORT:", PORT)
);
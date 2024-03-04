import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"

import dbConnection from "./config/dbConnection";

import authRouter from "./routes/auth.route"
import eventsRouter from "./routes/events.route"
import participateRouter from "./routes/participate.route"
import pendingAttendenceRouter from "./routes/pendingAttendence.route"
import enrollRouter from "./routes/enroll.route"
import attendenceRouter from "./routes/attendence.route"
import marksRouter from "./routes/marks.router"
import teachesRouter from "./routes/teaches.router"

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
app.use("/events", eventsRouter)
app.use("/participate", participateRouter)
app.use("/pending-attendence", pendingAttendenceRouter)
app.use("/enroll", enrollRouter)
app.use("/attendence", attendenceRouter)
app.use("/marks", marksRouter)
app.use("/teaches", teachesRouter)

const PORT: string = process.env.PORT || "4000";

// listening the server in the metioned PORT
app.listen(PORT, () =>
  console.log("Server started running at the PORT:", PORT)
);
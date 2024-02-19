import express from "express";
import dotenv from "dotenv"

import dbConnection from "./config/dbConnection";

const app = express();
dotenv.config()

// checking whether database is connected or not
dbConnection.connect((error) => {
  if (error) console.error("Fail to connect the Database\n", error);
  else console.log("database connected successfully");
})
dbConnection.query("SELECT * FROM FACULTY",(err,res)=>console.log(res));


const PORT: string = process.env.PORT || "4000";

// listening the server in the metioned PORT
app.listen(PORT, () =>
  console.log("Server started running at the PORT:", PORT)
);
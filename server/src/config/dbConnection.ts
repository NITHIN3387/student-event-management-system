import mysql from "mysql"
import dotenv from "dotenv"
dotenv.config()
// createing connnection to the mysql database
const dbConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

export default dbConnection
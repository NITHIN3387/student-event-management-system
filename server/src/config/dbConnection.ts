import mysql from "mysql"

// createing connnection to the mysql database
const dbConnection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

export default dbConnection
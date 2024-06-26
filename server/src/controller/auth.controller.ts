import { RequestHandler } from "express";
import { sign, Secret } from "jsonwebtoken";
import dbConnection from "../config/dbConnection";

interface data {
  registerNumber: string,
  password: string
}

interface studentType {
  sid?: string,
  sname?: string,
  password?: string,
  semester?: number,
  section?: string,
  bid?: string,
  fid?: string | null
}

interface facultyType {
  fid?: string,
  fname?: string,
  password?: string,
  semester?: number,
  did?: string,
  hod?: string,
}

/*
  method: POST,
  access: public,
  description: function to handle the user login
*/
const userLogin: RequestHandler = async (req, res) => {
  const { registerNumber, password }: data = req.body;

  // query to retrive the user's password with Sid = registerNumber
  const query: string = registerNumber.startsWith('4SF') ? 
  `
    SELECT password
    FROM STUDENT
    WHERE Sid = '${registerNumber}'
  `:
  `
    SELECT password
    FROM FACULTY
    WHERE Fid = '${registerNumber}'
  `


  // retriving the user's password with Sid = registerNumber from db
  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    const user: studentType & facultyType = result[0];

    // checking whether the user with given registerNumber exist or not
    if (!user) {
      res.status(404).send("user with this register id not found");
      return;
    }

    // checking whether the user's password matches with the given password
    if (user.password !== password) {
      res.status(401).send("Incorrent password");
      return;
    }

    /*
      if user's password matches then we will generate a token and send in the responce
      the token is valid for 1 hours
    */
    const token: string = sign(
      { registerNumber: registerNumber },
      process.env.SECRETE_KEY as Secret,
      { expiresIn: "1h" }
    );    
    
    res.cookie("token", token, {
      maxAge: 3600000,
      httpOnly: true
    }).status(200).send("user Login successfully"); 
  });
};

/*/*
  method: GET,
  access: private,
  description: function to fetch authorized user
*/
const getAuthUser: RequestHandler = async (req, res) => {
  const user = (req as any).user

  res.status(200).json(user)
}

const userLogout: RequestHandler = (req, res) => {
  res.clearCookie('token')
  .status(200)
  .send({message: 'user logged out successfully'})
}

/*
  method: GET,
  access: public,
  description: function to fetch student details by id
*/
const getStudentById: RequestHandler = async (req, res) => {
  const id: string = req.params.id 

  const query: string = `
    SELECT *
    FROM STUDENT
    WHERE Sid = '${id}';
  `
  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    const student: studentType = result[0]

    if (!student)  res.status(404).send("student with this id not found")
    else res.status(200).json(student)
  })
}

/*
  method: GET,
  access: public,
  description: function to fetch faculty details by id
*/
const getFacultyById: RequestHandler = async (req, res) => {
  const id: string = req.params.id 

  const query: string = `
    SELECT *
    FROM FACULTY
    WHERE Fid = '${id}';
  `
  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    const faculty: facultyType = result[0]

    if (!faculty)  res.status(404).send("faculty with this id not found")
    else res.status(200).json(faculty)
  })
}

const changePassword: RequestHandler = async (req, res) => {
  const user = (req as any).user
  const { oldPassword, newPassword } = req.body  

  if (user.PASSWORD !== oldPassword) {
    res.status(401).send("invalid Password")
    return
  }

  const query: string =
  user.SID ? 
  `
    UPDATE STUDENT
    SET PASSWORD = '${newPassword}'
    WHERE SID = '${user.SID}'
  `:
  `
    UPDATE FACULTY
    SET PASSWORD = '${newPassword}'
    WHERE FID = '${user.FID}'
  `


  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    else res.status(200).json(result)
  })
}

export { userLogin, getStudentById, getFacultyById, getAuthUser, userLogout, changePassword };

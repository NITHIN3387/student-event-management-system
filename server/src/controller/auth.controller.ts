import { RequestHandler } from "express";
import { sign, Secret } from "jsonwebtoken";
import dbConnection from "../config/dbConnection";

interface userType {
  sid?: string,
  sname?: string,
  password?: string,
  semester?: number,
  section?: string,
  bid?: string,
  fid?: string | null
}

/*
  method: POST,
  access: public,
  description: function to handle the user login
*/
const userLogin: RequestHandler = async (req, res) => {
  const { registerNumber, password } = req.body;

  // query to retrive the user's password with Sid = registerNumber
  const query: string = `
    SELECT password
    FROM STUDENT
    WHERE Sid = '${registerNumber}'
  `;

  // retriving the user's password with Sid = registerNumber from db
  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    const user: userType = result[0];

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

    res.cookie("token", token).status(200).send("user Login successfully");
  });
};

export { userLogin };

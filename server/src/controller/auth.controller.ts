import { RequestHandler } from "express";
import { sign, Secret } from "jsonwebtoken";
import dbConnection from "../config/dbConnection";

/*
  method: POST,
  access: public,
  description: function to handle the user login
*/
const userLogin: RequestHandler = async (req, res) => {
  const { registerId, password } = req.body;

  // query to retrive the user's password with Sid = registerId
  const query: string = `
    SELECT password
    FROM STUDENT
    WHERE Sid = ${registerId}
  `;

  // retriving the user's password with Sid = registerId from db
  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    // checking whether the user with given registerId exist or not
    if (!result.length) {
      res.status(404).send("user with this register id not found");
      return;
    }

    // checking whether the user's password matches with the given password
    if (result !== password) {
      res.status(401).send("Incorrent password");
      return;
    }

    /*
      if user's password matches then we will generate a token and send in the responce
      the token is valid for 1 hours
    */
    const token = sign(
      { registerId: registerId },
      process.env.SECRETE_KEY as Secret,
      { expiresIn: "1h" }
    );

    res.status(200).json(token);
  });
};

export { userLogin };

import { RequestHandler } from "express";
import { JwtPayload, Secret, verify } from "jsonwebtoken";
import dbConnection from "../config/dbConnection";

interface studentType {
  SID?: string,
  SNAME?: string,
  PASSWORD?: string,
  SEMESTER?: number,
  SECTION?: string,
  BID?: string,
  FID?: string | null
}

interface facultyType {
  FID?: string,
  FNAME?: string,
  PASSWORD?: string,
  DID?: string,
  HOD?: string,
}

const authUser: RequestHandler = async (req, res, next) => {
  const token: string | undefined = req.cookies.token || req.headers.authorization?.split(" ")[1]

  if (!token) {
    res.status(401).send("User not authorized")
    return
  }

  const decoded: string | JwtPayload = verify(token, process.env.SECRETE_KEY as Secret);

  // query to retrive the user with Sid = id
  const query: string = (decoded as any).registerNumber.startsWith('4SF') ? 
  `
    SELECT *
    FROM STUDENT
    WHERE Sid = '${(decoded as any).registerNumber}'
  `:
  `
    SELECT *
    FROM FACULTY
    WHERE Fid = '${(decoded as any).registerNumber}'
  `;

  // retriving the user with Sid = id from db
  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    const user: studentType & facultyType = result[0];

    if (!user) {
      res.status(401).send("unauthorized user")
      return
    }
    
    (req as any).user = user
    next()
  });
}

export { authUser }
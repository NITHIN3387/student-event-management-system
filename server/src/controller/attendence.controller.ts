import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const getAttendenceOfAuthUser: RequestHandler = async (req, res) => {
  const user = (req as any).user 

  const query = `
    SELECT *
    FROM ATTENDENCE A, SUBJECT S
    WHERE A.SUBID = S.SUBID AND A.SID = '${user.SID}'
  `

  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  })
}

export { getAttendenceOfAuthUser }
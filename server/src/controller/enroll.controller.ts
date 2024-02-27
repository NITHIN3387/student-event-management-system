import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const getEnrolledSubjectsByAuthUser: RequestHandler = async (req, res) => {
  const user = (req as any).user 

  const query = `
    SELECT S.SUBID, S.SUBNAME
    FROM ENROLL E, SUBJECT S
    WHERE E.SID = '${user.SID}' AND E.SUBID = S.SUBID AND S.SEMESTER = ${user.SEMESTER}
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

export { getEnrolledSubjectsByAuthUser }
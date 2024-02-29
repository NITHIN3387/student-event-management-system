import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const getMarksOfAuthUser: RequestHandler = async (req, res) => {
  const user = (req as any).user 

  const query = `
    SELECT *
    FROM MARKS M, SUBJECT S
    WHERE M.SUBID = S.SUBID AND M.SID = '${user.SID}'
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

export { getMarksOfAuthUser }
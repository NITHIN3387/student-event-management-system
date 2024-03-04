import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const getClassTeachByUser: RequestHandler = async (req, res) => {
  const user = (req as any).user 

  const query = `
    SELECT *
    FROM TEACHES T, SUBJECT S, SEMSEC SS
    WHERE T.SUBID = S.SUBID AND T.SSID = SS.SSID AND T.FID = '${user.FID}'
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

export { getClassTeachByUser }
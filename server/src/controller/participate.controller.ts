import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const getParticipationByAuthUserId: RequestHandler = async (req, res) => {
  const user = (req as any).user 

  const query = `
    SELECT *
    FROM PARTICIPATE
    WHERE Sid = '${user.SID}'
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

const addParticipation: RequestHandler = async (req, res) => {
  const user = (req as any).user;
  const { EID } = req.body;

  const query = `
    INSERT INTO PARTICIPATE VALUE (
      '${user.SID}', '${EID}', 'Pending', NULL, NULL
    )
  `;

  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json({ id: result.insertId });
  });
};

export { addParticipation, getParticipationByAuthUserId }

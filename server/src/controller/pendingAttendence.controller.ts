import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const addPendingAttendence: RequestHandler = async (req, res) => {
  const user = (req as any).user;
  const { EID, SUBID, Count } = req.body;

  const query = `
    INSERT INTO PENDING_ATTENDENCE VALUE (
      '${user.SID}', '${EID}', '${SUBID}', '${Count}'
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
}

const getPendingAttendenceOfAuthUser: RequestHandler = async (req, res) => {
  const user = (req as any).user 

  const query = `
    SELECT *
    FROM PENDING_ATTENDENCE
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

export { addPendingAttendence, getPendingAttendenceOfAuthUser }
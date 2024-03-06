import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const addPendingAttendence: RequestHandler = async (req, res) => {
  const { PID, SUBID, Count } = req.body;

  const query = `
    INSERT INTO PENDING_ATTENDENCE VALUE (
      '${PID}', '${SUBID}', '${Count}'
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
    SELECT ENAME, START_DATE, SUBNAME, COUNT
    FROM PENDING_ATTENDENCE PA, PARTICIPATE P, EVENTS E, SUBJECT S
    WHERE PA.SUBID = S.SUBID AND PA.PID = P.PID AND P.EID = E.EID AND SID = '${user.SID}' AND P.STATUS = 'Varified'
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
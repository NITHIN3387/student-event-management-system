import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const getParticipationByAuthUserId: RequestHandler = async (req, res) => {
  const user = (req as any).user;

  const query = `
    SELECT *
    FROM PARTICIPATE P, EVENTS E
    WHERE SID = '${user.SID}' AND E.EID = P.EID
  `;

  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  });
};

const addParticipation: RequestHandler = async (req, res) => {
  const user = (req as any).user;
  const { EID } = req.body;

  const query = `
  INSERT INTO PARTICIPATE VALUE (
    '${user.SID}', '${EID}', 'Pending', NULL, NULL
  )`;

  dbConnection.query(query, (error, result) => {
    if (error) {
      if (error.sqlMessage?.startsWith("Duplicate entry")) {
        res.status(409).send("You have already participated to this event");
        return;
      }

      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json({ id: result.insertId });
  });
};

const updateCertificate: RequestHandler = async (req, res) => {
  const user = (req as any).user
  const file = req.file;
  const { prize, eid } = req.body;

  const query = 
  `
    UPDATE PARTICIPATE
    SET CERTIFICATE = '${file?.path}', AWARD = '${prize}'
    WHERE SID = '${user.SID}' AND EID = '${eid}'
  `;

  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result);
  });};

export { addParticipation, getParticipationByAuthUserId, updateCertificate };

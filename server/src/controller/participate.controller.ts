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
    NULL, '${user.SID}', '${EID}', 'Pending', NULL, NULL
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
  const file = req.file;
  const { prize, pid } = req.body;

  const query = `
    UPDATE PARTICIPATE
    SET CERTIFICATE = '${file?.filename}', AWARD = '${prize}'
    WHERE PID = '${pid}'
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

const getCertificateImage: RequestHandler = async (req, res) => {
  const filename = req.params.file;
  const filePath =
    __dirname.split("/dist/controller")[0] +
    "/src/certificateFiles/" +
    filename;

  res.sendFile(filePath);
};

const deleteParticipate: RequestHandler = async (req, res) => {
  const PID = req.params.id;

  const query = `
    DELETE FROM PARTICIPATE
    WHERE PID = ${PID}
  `;

  dbConnection.query(query, (error) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }    

    res.status(200).send("deleted successfully");
  });

};

export {
  addParticipation,
  getParticipationByAuthUserId,
  updateCertificate,
  getCertificateImage,
  deleteParticipate,
};

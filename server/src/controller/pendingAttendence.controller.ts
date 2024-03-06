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
};

const getPendingAttendenceOfAuthUser: RequestHandler = async (req, res) => {
  const user = (req as any).user;

  const query = `
    SELECT ENAME, START_DATE, SUBNAME, COUNT, PID, SUBID
    FROM PENDING_ATTENDENCE PA, PARTICIPATE P, EVENTS E, SUBJECT S
    WHERE PA.SUBID = S.SUBID AND PA.PID = P.PID AND P.EID = E.EID AND SID = '${user.SID}' AND P.STATUS = 'Varified'
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

const getPendingAttendenceBySemSecSub: RequestHandler = async (req, res) => {
  const { sem, sec, sub } = req.params;

  const query = `
    SELECT E.ENAME, E.START_DATE, SUB.SUBNAME, PA.COUNT, S.SNAME, S.SID, P.PID, SUB.SUBID
    FROM PENDING_ATTENDENCE PA, PARTICIPATE P, EVENTS E, SUBJECT SUB, STUDENT S
    WHERE PA.SUBID = SUB.SUBID AND PA.PID = P.PID AND P.EID = E.EID AND S.SID = P.SID AND P.STATUS = 'Varified' AND S.SEMESTER = ${sem} AND S.SECTION = '${sec}' AND SUB.SUBID = '${sub}'
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

const deletePendingAttendence: RequestHandler = async (req, res) => {
  const { pid, subid } = req.params;

  const query = `
    DELETE FROM PENDING_ATTENDENCE 
    WHERE PID = ${pid} AND SUBID = '${subid}'
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

export {
  addPendingAttendence,
  getPendingAttendenceOfAuthUser,
  getPendingAttendenceBySemSecSub,
  deletePendingAttendence,
};

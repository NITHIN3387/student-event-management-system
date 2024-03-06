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

const getAttendenceBySid: RequestHandler = async (req, res) => {
  const SID = req.params.sid

  const query = `
    SELECT *
    FROM ATTENDENCE A, SUBJECT S
    WHERE A.SUBID = S.SUBID AND A.SID = '${SID}'
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

const getAttendenceBySemSecSub: RequestHandler = async (req, res) => {
  const { sem, sec, sub } = req.params

  const query = `
    SELECT S.SNAME, S.SID, A.CONDUCTED,	A.PRESENT
    FROM STUDENT S, ATTENDENCE A
    WHERE S.SID = A.SID AND S.SEMESTER = '${sem}' AND S.SECTION = '${sec}' AND SUBID = '${sub}'
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

const updateAttendenceOfStudentById: RequestHandler = async (req, res) => {
  const SID = req.params.sid
  const { subid, conducted, present } = req.body

  const query = `
    UPDATE ATTENDENCE
    SET CONDUCTED = ${conducted}, PRESENT = ${present}
    WHERE SID = '${SID}' AND SUBID = '${subid}'
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

const incrementAttendenceOfStudentById: RequestHandler = async (req, res) => {
  const { sid } = req.params
  const { subid, count } = req.body

  const query = `
    UPDATE ATTENDENCE
    SET PRESENT = PRESENT + ${count}
    WHERE SID = '${sid}' AND SUBID = '${subid}
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

export { getAttendenceOfAuthUser, getAttendenceBySemSecSub, updateAttendenceOfStudentById, getAttendenceBySid, incrementAttendenceOfStudentById }
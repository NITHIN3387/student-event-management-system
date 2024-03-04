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

const getMarksBySemSecSub: RequestHandler = async (req, res) => {
  const { sem, sec, sub } = req.params

  const query = `
    SELECT S.SNAME, S.SID, M.IA1,	M.IA2,M.IA3, M.ASSIGNMENT
    FROM STUDENT S, MARKS M
    WHERE S.SID = M.SID AND S.SEMESTER = '${sem}' AND S.SECTION = '${sec}' AND SUBID = '${sub}'
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

const updateMarksOfStudentById: RequestHandler = async (req, res) => {
  const SID = req.params.sid
  const { IA1, IA2, IA3, ASSIGNMENT } = req.body

  const query = `
    UPDATE MARKS
    SET IA1 = ${IA1}, IA2 = ${IA2}, IA3 = ${IA3}, ASSIGNMENT = ${ASSIGNMENT} 
    WHERE SID = '${SID}'
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

export { getMarksOfAuthUser, getMarksBySemSecSub, updateMarksOfStudentById }
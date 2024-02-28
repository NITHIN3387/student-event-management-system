import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const getEvents: RequestHandler = async (req, res) => {
  const query = `
    SELECT *
    FROM EVENTS
  `

  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json(result)
  })
}

const getEventById: RequestHandler = async (req, res) => {
  const id = req.params.id 

  const query = `
    SELECT *
    FROM EVENTS
    WHERE Eid = ${id}
  `

  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    if (!result.length) {
      res.status(404).send(`Event with ID:${id} not found`)
      return
    }

    res.status(200).json(result)
  })
}

const addEvent: RequestHandler = async (req, res) => {
  const { Ename, Eplace, Etype, EstartDate, EendDate } = req.body

  const query = `
    INSERT INTO EVENTS VALUES (
      NULL, '${Ename}', '${Etype}', '${Eplace}', '${EstartDate}', '${EendDate}'
    )
  `

  dbConnection.query(query, (error, result) => {
    if (error) {
      res.status(500).send("internal server error");
      console.log(error);
      return;
    }

    res.status(200).json({id: result.insertId})
  })
}

export { getEvents, getEventById, addEvent }
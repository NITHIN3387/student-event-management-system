import { RequestHandler } from "express";
import dbConnection from "../config/dbConnection";

const getMentees: RequestHandler = async (req, res) => {
    const user = (req as any).user
    const { sem, sec } = req.params
    const query = `
    SELECT SID ,SNAME
    FROM STUDENT
    WHERE SEMESTER='${sem}' AND SECTION ='${sec}' AND FID='${user.FID}'`
    dbConnection.query(query, (error, result) => {
        if (error) {
            res.status(500).send("internal server error");
            console.log(error);
            return;
        }
        res.status(200).json(result);
    })
}

const updateMenter: RequestHandler = async (req, res) => {

    const user = (req as any).user
    const { SID } = req.body
    const query = `
    UPDATE STUDENT
    SET FID ='${user.FID}'
    where SID ='${SID}'
    `
    dbConnection.query(query, (error, result) => {
        if (error) {
            result.status(500).send("internal server Error!")
            console.log(error)
        }

        res.status(200).json(result)
    })
}

const deleteMentee: RequestHandler = async (req, res) => {
    const { sid } = req.params

    const query = `
        UPDATE STUDENT
        SET FID = null
        where SID ='${sid}'
    `

    dbConnection.query(query, (error, result) => {
        if (error) {
            result.status(500).send("internal server Error!")
            console.log(error)
        }

        res.status(200).json(result)
    })
}

export { getMentees, updateMenter, deleteMentee }
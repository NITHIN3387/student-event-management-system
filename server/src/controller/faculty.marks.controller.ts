import{RequestHandler} from "express"
import dbConnection from "../config/dbConnection"
// const addStudentMarks:RequestHandler=async(req,res)=>{
//     const {SID,SUBID,IA1,IA2,IA3,ASSIGNMENT}=req.body;
//     const query=  `
//     INSERT INTO MARKS VALUE(
//         '${SID}','${SUBID}','${IA1}','${IA2}','${IA3}','${ASSIGNMENT}
//     )`;
//     dbConnection.query(query,(error,result)=>{
//         if(error){
//             res.status(500).send("internal server error");
//             console.log(error);
//             return;
//         }
//         res.status(200).json({id:result.inserted});

//     })

// }
const getStudentMarks:RequestHandler=async(req,res)=>{
    const user=(req as any).user
    const {SUBID,SEMESTER,SECTION}=req.body;
    const query=`
    SELECT SUBID,SEMESTER,SECTION
    FROM MARKS 
    WHERE SUBID='${SUBID}'
    
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
export {getStudentMarks}
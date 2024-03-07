"use client"

import SearchableDropDown from "@/components/FormInputs/SearchableDropDown/SearchableDropDown";
import { useRouter } from "next/navigation";
import React,{FC,FormEventHandler,useEffect,useState,} from "react";

const AddMenteesForm:FC=():JSX.Element=>{
    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(false);
    const[sid,setSid]=useState<string>("");
    const[emptySid,setEmptySid]=useState<boolean>(false);
    const [studentList, setStudentList] = useState<{ key: string, value: string }[]>([])

    useEffect(() => {
      const fetchAllStudents = async () => {
        const url = process.env.NEXT_PUBLIC_SERVER_URL + "/student"
        const responce: { SID: string }[] = await fetch(url).then(res => res.json())        

        setStudentList(() => responce.map(student => ({
          key: student.SID, value: student.SID
        })))
      }

      fetchAllStudents()
    }, [])

    const handleUpdateMentees: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault()

      if (!sid.length) {
        setEmptySid(true)
        return
      }

      setLoading(true);     

      const URL = process.env.NEXT_PUBLIC_SERVER_URL + `/student/update-menter`;

      await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ SID:sid }),
        credentials: "include",
      }).then((res) => res.json());
      
      setLoading(false);
      router.back()
    }

    return (
        <form onSubmit={handleUpdateMentees}>
          <SearchableDropDown
            label="Student ID"
            options={studentList}
            setValue={setSid}
            emptyValue={emptySid}
            setEmptyValue={setEmptySid}
          />
    
          <button className="bg-primary-color text-white rounded-md mt-1 px-3 py-1" type="submit" disabled={loading}>
            {loading ? "Updating ..." : "Update"}
          </button>
        </form>
      );
}
   
export default AddMenteesForm ;
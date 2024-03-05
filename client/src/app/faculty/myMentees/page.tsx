"use client"
import React,{FC,useState,useEffect} from 'react'
import Loader from '@/components/Loaders/Loader/Loader';
import FilterHeader from '@/components/Headers/FilterHeader/FilterHeader'
import Table from '@/components/Tables/Table/Table';
interface ResponseType{
  SID:string;
  SNAME:string;
}
const tableRowVal=[
  "Student USN",
  "Student Name",

];

const page :FC = ():JSX.Element => {
  const[tableColVal,setTableColVal]=useState<Array<Array<string|number>>>(
    [[]]
  );
  // const [loader,setloader]=useState<boolean>(true);
  
  useEffect(()=>{
    const fetchStudentsDetail=async()=>{
      const url=process.env.NEXT_PUBLIC_SERVER_URL + `/student/${semester}/${section}`;
      const responce:ResponseType[]=await fetch(url,{
         method:"GET",
         credentials:"include",
      }).then((res)=>
        res.json()
      );
      setTableColVal(
        responce.map((student)=>[
          student.SID,
          student.SNAME,
        ])
      );
      
      // setloader(false);
    }

    if(semester>0 && section )
    fetchStudentsDetail();
  });
  // if(loader) return <Loader/>
  const [semester,setSemester]=useState<number>(0);
  const[section,setSection]=useState<string>("")
  const[course,setCourse]=useState<string>(" ")
  return (
    <div >
      <FilterHeader
      semester={semester}
      setSemester={setSemester}
      section={section}
      setSection={setSection}
      course={course}
      setCourse={setCourse}/>
      <div className='mt-3'>
        <Table tableRowVal={tableRowVal} tableColVal={tableColVal}/>
        </div>
    </div>
  )
}

export default page
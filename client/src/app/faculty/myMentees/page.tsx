"use client"
import React,{FC,useState} from 'react'
import '@/components/Headers/FilterHeader/FilterHeader'
import FilterHeader from '@/components/Headers/FilterHeader/FilterHeader'

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

  
  const [semester,setSemester]=useState<number>(0);
  const[section,setSection]=useState<string>("")
  const[course,setCourse]=useState<string>(" ")
  return (
    <div className='mt-3'>
      <FilterHeader
      semester={semester}
      setSemester={setSemester}
      section={section}
      setSection={setSection}
      course={course}
      setCourse={setCourse}/>
    </div>
  )
}

export default page
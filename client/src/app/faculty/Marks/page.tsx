"use client"
import React, { FC, useState, useEffect } from 'react';
import Table from '@/components/Tables/FacultyTable/TableForFaculty';

interface ResponseType {
  ASSIGNMENT: number;
  IA1: number;
  IA2: number;
  IA3: number;
  SEMESTER: number;
  SID: string;
  SUBID: string;
  SUBNAME: string;
  Edit: string;
}

const tableRowVal = [
  'Student Id',
  'IA-1',
  'IA-2',
  'IA-3',
  'Assignment',
  'Final',
  'Edit',
];

const Page: FC = (): JSX.Element => {
  const [loader, setLoader] = useState<boolean>(true);
  const [CourseId, setCourseId] = useState<string>('');
  const [semester, setSemester] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [tableColVal, setTableColVal] = useState<Array<Array<string | number>>>([[]]);

  const handleSubmit = async () => {
    if (CourseId && semester && section) {
      const URL: string = (process.env.NEXT_PUBLIC_SERVER_URL as string) + '/faculty/Marks'; // api url for user login
      const headers: HeadersInit = { 'Content-Type': 'application/json' }; // header content for fetching data from api
      const data = { SUBID:'21AI51'}; // data to send through api

      try {
        const response = await fetch(URL, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(data),
          credentials: 'include',
        })

        if (!response.ok) {
          throw new Error('Failed to fetch data from the server');
        }

        const responseData: ResponseType[] = await response.json();
        console.log(responseData)

        const processedData:any = responseData.map((item) => [
          item.SID,
          item.IA1,
          item.IA2,
          item.IA3,
          item.ASSIGNMENT,
          item.IA1 + item.IA2 + item.IA3 + item.ASSIGNMENT,
          <button>{item.Edit}</button>,
        ]);
         
        setTableColVal(processedData);
        setLoader(false);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch data from the server');
      }
    } else {
      alert('Please fill both semester and section!');
    }
  };

  useEffect(() => {
    if (!loader) {
      setShowNewPage(true);
    }
  }, [loader]);

  const [showNewPage, setShowNewPage] = useState<boolean>(false);

  return (
    <div>
      {showNewPage ? (
        <div>
          <h1>Enter Marks</h1>
          <Table tableRowVal={tableRowVal} tableColVal={tableColVal} onButtonClick={handleSubmit}/>
        </div>
      ) : (
        <div>
          <h1>Enter the course semester and the section</h1>
          <label>CourseId:</label>
          <input type="text" value={CourseId} onChange={(e) => setCourseId(e.target.value)} />
          <label>Semester:</label>
          <input type="text" value={semester} onChange={(e) => setSemester(e.target.value)} />
          <label>Section:</label>
          <input type="text" value={section} onChange={(e) => setSection(e.target.value)} />
          <button className="bg-primary-color ml-4"onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default Page;

import SearchableDropDown from "@/components/FormInputs/SearchableDropDown/SearchableDropDown";
import React, { Dispatch, FC, FormEventHandler, SetStateAction, useEffect, useState } from "react";

interface propsType {
  semester: number;
  setSemester: Dispatch<SetStateAction<number>>
  section: string;
  setSection: Dispatch<SetStateAction<string>>
  course: string;
  setCourse: Dispatch<SetStateAction<string>>
}

interface responceType {
  FID: string,
  SSID: string,
  SUBID: string,
  SUBNAME: string,
  SEMESTER: number,
  SECTION: string,
  BID: string
}

const semesterOptions = [
  { key: "1", value: "1" },
  { key: "2", value: "2" },
  { key: "3", value: "3" },
  { key: "4", value: "4" },
  { key: "5", value: "5" },
  { key: "6", value: "6" },
  { key: "7", value: "7" },
  { key: "8", value: "8" },
];

const FilterHeader: FC<propsType> = ({ semester, setSemester, section, setSection, course, setCourse }) => {
  const [sectionOptions, setSectionOptions] = useState<{key: string, value: string}[]>([])
  const [courseOptions, setCourseOptions] = useState<{key: string, value: string}[]>([])

  const [emptySemester, setEmptySemester] = useState<boolean>(false)
  const [emptySection, setEmptySection] = useState<boolean>(false)
  const [emptyCourse, setEmptyCourse] = useState<boolean>(false)

  useEffect(() => {
    const fetchClassTeachesByUser = async () => {
      const url = process.env.NEXT_PUBLIC_SERVER_URL + "/teaches"

      const responce: responceType[] = await fetch(url, {
        method: "GET",
        credentials: "include"
      }).then(res => res.json())

      setSectionOptions(() => (
        responce.map((item) => (
          { key: item.SSID, value: item.SSID }
        ))
      ))

      setCourseOptions(() => (
        responce.map((item) => (
          { key: item.SUBNAME, value: item.SUBID }
        ))
      ))
    }

    fetchClassTeachesByUser()
  }, [])

  const handleApply: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    if (semester < 1 || semester > 8 ) {
      setEmptySemester(true)
      return
    }
    if(!section.length) {
      setEmptySection(true)
      return
    }
    if(!course.length) {
      setEmptyCourse(true)
      return
    }

    console.log(semester, section, course);
  }

  return (
    <form className="bg-white rounded-md grid grid-cols-[1fr_1fr_1fr_auto] gap-7 p-5 pb-0" onSubmit={handleApply}>
      <SearchableDropDown
        label="Semester"
        options={semesterOptions}
        type="number"
        placeholder="Select the semester here"
        setValue={setSemester}
        emptyValue={emptySemester}
        setEmptyValue={setEmptySemester}
      />

      <SearchableDropDown
        label="Section"
        options={sectionOptions}
        placeholder="Select the section here"
        setValue={setSection}
        emptyValue={emptySection}
        setEmptyValue={setEmptySection}
      />

      <SearchableDropDown
        label="Course"
        options={courseOptions}
        placeholder="Select the Course here"
        setValue={setCourse}
        emptyValue={emptyCourse}
        setEmptyValue={setEmptyCourse}
      />
      <div className="grid">
        <label className="opacity-0">.</label>
        <button
          type="submit"
          className="bg-primary-color text-white h-fit rounded-md py-1 px-3"
        >
          Apply
        </button>
        <p className="opacity-0">.</p>
      </div>
    </form>
  );
};

export default FilterHeader;

"use client";

import AutoCompleteInputBox from "@/components/FormInputs/AutoCompleteInputBox/AutoCompleteInputBox";
import InputBox from "@/components/FormInputs/InputBox/InputBox";
import SearchableDropDown from "@/components/FormInputs/SearchableDropDown/SearchableDropDown";
import React, {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";

interface subjectType {
  name: string;
  count: number;
}

interface EtypeTypes {
  key: string;
  value: string;
}

const Etypes: EtypeTypes[] = [
  { key: "Hackathon", value: "Hackathon" },
  { key: "Conference", value: "Conference" },
  { key: "Paper presentaion", value: "Paper presentaion" },
  { key: "Placement", value: "Placement" },
  { key: "NPTEL", value: "NPTEL" },
  { key: "Internship", value: "Internship" },
  { key: "Valunteering", value: "Valunteering" },
  { key: "Cultural", value: "Cultural" },
  { key: "Sports", value: "Sports" },
  { key: "Other", value: "Other" },
];

const AddParticipationForm: FC = (): JSX.Element => {
  const [Ename, setEname] = useState<string>("");
  const [Eplace, setEplace] = useState<string>("");
  const [Etype, setEtype] = useState<string>("");
  const [EstartDate, setEstartDate] = useState<string>("");
  const [EendDate, setEendDate] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [count, setCount] = useState<number>(0);

  const [subjects, setSubjects] = useState<Array<subjectType>>([]);

  const [emptyEname, setEmptyEname] = useState<boolean>(false);
  const [emptyEplace, setEmptyEplace] = useState<boolean>(false);
  const [emptyEtype, setEmptyEtype] = useState<boolean>(false);
  const [emptyEstartDate, setEmptyEstartDate] = useState<boolean>(false);
  const [emptyEendDate, setEmptyEendDate] = useState<boolean>(false);
  const [emptySubject, setEmptySubject] = useState<boolean>(false);
  const [emptyCount, setEmptyCount] = useState<boolean>(false);

  const handleSubjectAdd: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (!subject.length) {
      setEmptySubject(true);
      return;
    }

    if (count <= 0 || !count) {
      setEmptyCount(true);
      return;
    }

    setSubjects((pre) => [
      ...pre,
      {
        name: subject,
        count: count,
      },
    ]);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    
    if (!Ename.length) { setEmptyEname(true); return }
    if (!Eplace.length) { setEmptyEplace(true); return }
    if (!Etype.length) { setEmptyEtype(true); return }
    if (!EstartDate.length) { setEmptyEstartDate(true); return }
    if (!EendDate.length) { setEmptyEendDate(true); return }

    console.log(Ename, Eplace, Etype, EstartDate, EendDate, subjects);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-1">
        <AutoCompleteInputBox
          label="Event name"
          placeholder="Enter the event name"
          options={Etypes}
          setValue={setEname}
          emptyValue={emptyEname}
          setEmptyValue={setEmptyEname}
        />
      </div>

      <div className="flex gap-5">
        <div className="grid gap-1 w-full">
          <InputBox
            label="Location"
            placeholder="Enter the event location"
            setValue={setEplace}
            emptyValue={emptyEplace}
            setEmptyValue={setEmptyEplace}
          />
        </div>

        <div className="grid">
          <SearchableDropDown
            label="Event type"
            placeholder="Select the event type"
            options={Etypes}
            emptyValue={emptyEtype}
            setEmptyValue={setEmptyEtype}
            setValue={setEtype}
          />
        </div>
      </div>

      <div className="flex gap-5 mb-4">
        <div className="grid gap-1 w-full">
          <InputBox
            label="Start Date"
            type="date"
            setValue={setEstartDate}
            emptyValue={emptyEstartDate}
            setEmptyValue={setEmptyEstartDate}
          />
        </div>

        <div className="grid gap-1 w-full">
          <InputBox
            label="End Date"
            type="date"
            setValue={setEendDate}
            emptyValue={emptyEendDate}
            setEmptyValue={setEmptyEendDate}
          />
        </div>
      </div>

      <hr className="border-black mb-7" />

      <div className="flex gap-5 mb-4 w-full">
        <div className="grid gap-1 w-full">
          <SearchableDropDown
            label="Periods you will miss on that day"
            placeholder="Enter the subject name here..."
            options={Etypes}
            emptyValue={emptySubject}
            setEmptyValue={setEmptySubject}
            setValue={setSubject}
          />
        </div>

        <div className="grid gap-1">
          <InputBox
            label="Count"
            placeholder="Enter number of period you will miss"
            setValue={setCount}
            emptyValue={emptyCount}
            setEmptyValue={setEmptyCount}
          />
        </div>

        <div className="grid gap-1">
          <label className="opacity-0">h</label>
          <button
            className="bg-primary-color px-3 py-1 text-white rounded-md"
            type="button"
            onClick={handleSubjectAdd}
          >
            Add
          </button>
          <p className="text-[0.8em] opacity-0 my-1">.</p>
        </div>
      </div>

      <ul className="border rounded-md overflow-hidden mb-7">
        <li className="border grid grid-cols-[9fr_1fr]">
          <span className="border-r pl-3 p-1 font-bold">Subject</span>
          <span className="text-center font-bold">Count</span>
        </li>
        {subjects.length ? (
          subjects.map((items) => (
            <li
              key={items.name}
              className="border grid grid-cols-[9fr_1fr] items-center"
            >
              <span className="border-r pl-3 p-1">{items.name}</span>
              <span className="text-center">{items.count}</span>
            </li>
          ))
        ) : (
          <p className="text-center p-1">No subjects is added yet !!!</p>
        )}
      </ul>

      <button
        type="submit"
        className="bg-primary-color px-3 py-1 rounded-md text-white "
      >
        Submit
      </button>
    </form>
  );
};

export default AddParticipationForm;

"use client";

import AutoCompleteInputBox from "@/components/FormInputs/AutoCompleteInputBox/AutoCompleteInputBox";
import InputBox from "@/components/FormInputs/InputBox/InputBox";
import SearchableDropDown from "@/components/FormInputs/SearchableDropDown/SearchableDropDown";
import { useRouter } from "next/navigation";
import React, {
  FC,
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

interface subjectType {
  name: string;
  count: number;
}

interface optionsTypes {
  key: string;
  value: string;
}

interface eventType {
  EID: number;
  ENAME: string;
  EPLACE: string;
  ETYPE: string;
  START_DATE: string;
  END_DATE: string;
}

const Etypes: optionsTypes[] = [
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
  const router = useRouter()

  const [Ename, setEname] = useState<string>("");
  const [Eplace, setEplace] = useState<string>("");
  const [Etype, setEtype] = useState<string>("");
  const [EstartDate, setEstartDate] = useState<string>("");
  const [EendDate, setEendDate] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [count, setCount] = useState<string>("");

  const [subjects, setSubjects] = useState<Array<subjectType>>([]);

  const [emptyEname, setEmptyEname] = useState<boolean>(false);
  const [emptyEplace, setEmptyEplace] = useState<boolean>(false);
  const [emptyEtype, setEmptyEtype] = useState<boolean>(false);
  const [emptyEstartDate, setEmptyEstartDate] = useState<boolean>(false);
  const [emptyEendDate, setEmptyEendDate] = useState<boolean>(false);
  const [emptySubject, setEmptySubject] = useState<boolean>(false);
  const [emptyCount, setEmptyCount] = useState<boolean>(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState<boolean>(false);

  const [enrolledSubjects, setEnrolledSubjects] = useState<optionsTypes[]>([]);
  const [events, setEvents] = useState<eventType[]>([]);
  const [eventOptions, setEventOptions] = useState<optionsTypes[]>([]);

  useEffect(() => {
    const fetchEnrolledSubjects = async () => {
      const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/enroll";

      const responce: { SUBID: string; SUBNAME: string }[] = await fetch(URL, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setEnrolledSubjects(
        responce.map((ele) => ({
          key: ele.SUBNAME,
          value: `${ele.SUBNAME}-${ele.SUBID}`,
        }))
      );
    };

    const fetchEvents = async () => {
      const URL = process.env.NEXT_PUBLIC_SERVER_URL + "/events";

      const responce: eventType[] = await fetch(URL, {
        method: "GET",
        credentials: "include",
      }).then((res) => res.json());

      setEvents(responce);

      const allEvents = responce.map((item) => ({
        key: `${item.ENAME} (${item.START_DATE.split("-")[0]})`,
        value: item.ENAME,
      }));

      setEventOptions(
        Array.from(new Map(allEvents.map((obj) => [obj.key, obj])).values())
      );
    };

    fetchEnrolledSubjects();
    fetchEvents();

    const event = events.find((item) => item.ENAME === Ename);

    if (event) {
      setEplace(event.EPLACE);
      setEstartDate(event.START_DATE.split("T")[0]);
      setEendDate(event.END_DATE.split("T")[0]);
    } else {
      // setEplace("");
      // setEstartDate("");
      // setEendDate("");
    }    
  }, [events, Ename]);

  const handleSubjectAdd: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    if (!subject.length) {
      setEmptySubject(true);
      return;
    }

    if (parseInt(count) <= 0 || !count) {
      setEmptyCount(true);
      return;
    }

    setSubjects((pre) => {
      const existingSubjectIndex = pre.findIndex(
        (item) => item.name === subject
      );

      if (existingSubjectIndex !== -1)
        return pre.map((item, index) => {
          console.log(
            item.count,
            count,
            item.count + count,
            typeof item.count,
            typeof count
          );

          if (index === existingSubjectIndex)
            return { ...item, count: item.count + parseInt(count) };
          return item;
        });
      else return [...pre, { name: subject, count: parseInt(count) }];
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();    

    const fields = [Ename, Eplace, Etype, EstartDate, EendDate];
    const emptyFields = [
      setEmptyEname,
      setEmptyEplace,
      setEmptyEtype,
      setEmptyEstartDate,
      setEmptyEendDate,
    ];

    for (let i = 0; i < fields.length; i++) {
      if (!fields[i].length) {
        emptyFields[i](true);
        return;
      }
    }

    const tempEvent = events.find(
      (item) =>
        item.ENAME === Ename &&
        item.EPLACE === Eplace &&
        item.ETYPE === Etype &&
        item.START_DATE.split("T")[0] === EstartDate &&
        item.END_DATE.split("T")[0] === EendDate
    );

    const URL_EVENT = process.env.NEXT_PUBLIC_SERVER_URL + "/events";
    const URL_PARTICIPATE = process.env.NEXT_PUBLIC_SERVER_URL + "/participate";
    const URL_PENDING_ATTENDECE =
      process.env.NEXT_PUBLIC_SERVER_URL + "/pending-attendence";

    const eventBody = { Ename, Eplace, Etype, EstartDate, EendDate };

    const EID: { id: number } = tempEvent
      ? { id: tempEvent.EID }
      : await fetch(URL_EVENT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(eventBody),
          credentials: "include",
        }).then((res) => res.json());

    const participateResponce = await fetch(URL_PARTICIPATE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ EID: EID.id }),
      credentials: "include",
    })    

    if (participateResponce.status === 409) {
      setAlreadyRegistered(true);
      return;
    }

    subjects.forEach(async (subject) => {
      await fetch(URL_PENDING_ATTENDECE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          EID: EID.id,
          SUBID: subject.name.split("-")[1],
          Count: subject.count,
        }),
        credentials: "include",
      });
    });

    router.back()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-1">
        <AutoCompleteInputBox
          label="Event name"
          placeholder="Enter the event name"
          options={eventOptions}
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
            value={Eplace}
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
            value={EstartDate}
            setValue={setEstartDate}
            emptyValue={emptyEstartDate}
            setEmptyValue={setEmptyEstartDate}
          />
        </div>

        <div className="grid gap-1 w-full">
          <InputBox
            label="End Date"
            type="date"
            value={EendDate}
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
            options={enrolledSubjects}
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

      <ul className="border rounded-md overflow-hidden mb-3">
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
      {(alreadyRegistered && (
        <p className="text-[0.8em] text-red-500 my-2">
          * You Have Already registered to this event
        </p>
      )) || <p className="text-[0.8em] opacity-0 my-2">.</p>}
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

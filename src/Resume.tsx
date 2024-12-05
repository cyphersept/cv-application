import "./Resume.css";
import "./InfoSection";
import type { InfoObject } from "./Interfaces";
import { InfoSection } from "./InfoSection";
import { BasicDisplay, EduDisplay, WorkDisplay } from "./Displays";
import { useState } from "react";

// Default values for resume

const basicInfo: InfoObject = {
  f1: { type: "header", label: "Basic info:" },
  name: { id: "name", label: "Name", classes: "required", value: "Sun Wukong" },
  title: { id: "title", label: "Title", classes: "required", value: "" },
  phone: { id: "phone", label: "Phone Number", classes: "required", value: "" },
  email: {
    id: "email",
    label: "Email",
    type: "email",
    classes: "required",
    value: "",
  },
  location: {
    id: "location",
    label: "Location",
    classes: "required",
    value: "",
  },
  f2: { type: "header", label: "Your socials:" },
  linkedin: { id: "linkedin", label: "Linkedin", type: "url", value: "" },
  github: { id: "github", label: "Github", type: "url", value: "" },
  portfolio: { id: "portfolio", label: "Portfolio", type: "url", value: "" },
};

const eduInfoItem: InfoObject = {
  school: { id: "school", label: "School", value: "" },
  degree: { id: "degree", label: "Degree", value: "" },
  start: { id: "start", label: "Start date", value: "" },
  end: { id: "end", label: "End date", value: "" },
};

const workInfoItem: InfoObject = {
  company: { id: "company", label: "Company", value: "" },
  title: { id: "title", label: "Title", value: "" },
  start: { id: "start", label: "Start date", value: "" },
  end: { id: "end", label: "End date", value: "" },
  about: {
    id: "about",
    label: "About",
    type: "long",
    classes: "repeating",
    value: "",
    values: [],
  },
};

export function Resume() {
  const [eduState, setEduState] = useState([eduInfoItem]);
  const [workState, setWorkState] = useState([workInfoItem]);

  // Render an InfoSection that can display info or edit in form for every education entry
  const eduItems = eduState.map((info: typeof eduInfoItem, ind: number) => (
    <InfoSection contentInfo={info} display={EduDisplay} key={ind} />
  ));

  // Render an InfoSection that can display info or edit in form for every work entry
  const workItems = workState.map((info: typeof workInfoItem, ind: number) => (
    <InfoSection contentInfo={info} display={WorkDisplay} key={ind} />
  ));

  // Add another work/education section when clicked
  const addEdu = () => setEduState(eduState.concat([eduInfoItem]));
  const addWork = () => {
    console.log(workInfoItem);
    setWorkState(workState.concat([workInfoItem]));
  };

  return (
    <section>
      <InfoSection contentInfo={basicInfo} display={BasicDisplay} />
      <section className="education">
        <h2>Education</h2>
        <button onClick={addEdu} type="button">
          Add
        </button>
        <ul>{eduItems}</ul>
      </section>
      <section className="work">
        <h2>Work History</h2>
        <button onClick={addWork} type="button">
          Add
        </button>
        <ul>{workItems}</ul>
      </section>
    </section>
  );
}

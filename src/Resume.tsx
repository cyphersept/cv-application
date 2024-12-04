import "./Resume.css";
import "./Section";
import type { InfoItem, InfoObject } from "./Interfaces";

import { useState } from "react";
import { Form } from "./Form";

const basicInfo: InfoObject = {
  f1: { type: "header", label: "Basic info:" },
  name: { id: "name", label: "Name", classes: "required", value: "" },
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

const eduInfo: (typeof eduInfoItem)[] = [eduInfoItem];
const workInfo: (typeof workInfoItem)[] = [workInfoItem];

export function Resume() {
  const [eduState, setEduState] = useState(eduInfo);
  const [workState, setWorkState] = useState(workInfo);
  const eduItems = eduState.map((info: typeof eduInfoItem, ind: number) => (
    <InfoSection contentInfo={info} display={EduDisplay} key={ind} />
  ));
  const addEdu = () => setEduState(eduState.concat([eduInfoItem]));

  const workItems = workState.map((info: typeof workInfoItem, ind: number) => (
    <InfoSection contentInfo={info} display={WorkDisplay} key={ind} />
  ));
  const addWork = () => setWorkState(workState.concat([workInfoItem]));

  return (
    <section>
      <InfoSection contentInfo={basicInfo} display={BasicsDisplay} />
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

function InfoSection(props: {
  contentInfo: InfoObject;
  display: React.ComponentType<{
    content: InfoObject;
    clickToEdit: () => void;
  }>;
}) {
  const [content, setContent] = useState(props.contentInfo);
  const [showForm, setShowForm] = useState(false);
  const formStructure = Object.values(content);
  const submitContent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newContent = { ...content };
    console.log(formData);
    for (const [key, val] of Object.entries(newContent)) {
      if ("values" in val) {
        const oldArr = val.values ?? [""];
        const newArr = oldArr.map(
          (_, i) => formData.get(key + i.toString()) as string
        );
        (newContent[key as keyof typeof newContent] as InfoItem).values =
          newArr;
      } else if ("value" in val) {
        const formVal = formData.get(key);
        (newContent[key as keyof typeof newContent] as InfoItem).value =
          typeof formVal == "string" ? formVal : "";
      }
    }
    console.log(newContent);
    setContent(newContent);
    setShowForm(false);
  };

  if (showForm)
    return (
      <Form name="basic" structure={formStructure} formAction={submitContent} />
    );
  else
    return (
      <props.display content={content} clickToEdit={() => setShowForm(true)} />
    );
}

function BasicsDisplay({
  content,
  clickToEdit,
}: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  return (
    <section>
      <button className="edit" onClick={clickToEdit}>
        Edit
      </button>
      <h1>{content.name.value}</h1>
      <h2>{content.title.value}</h2>
      <div className="contact">
        <div className="phone">{content.phone.value}</div>
        <div className="email">{content.email.value}</div>
        <div className="location">{content.location.value}</div>
      </div>
      <div className="sites">
        <div className="linkedin">{content.linkedin.value}</div>
        <div className="github">{content.github.value}</div>
        <div className="portfolio">{content.portfolio.value}</div>
      </div>
    </section>
  );
}

function EduDisplay(props: { content: InfoObject; clickToEdit: () => void }) {
  return (
    <li>
      <button className="edit" onClick={props.clickToEdit}>
        Edit
      </button>
      <div className="school">{props.content.school.value}</div>
      <div className="degree">{props.content.degree.value}</div>
      <div className="duration">
        <div className="start">{props.content.start.value}</div>
        <div className="end">{props.content.end.value}</div>
      </div>
    </li>
  );
}

function WorkDisplay(props: { content: InfoObject; clickToEdit: () => void }) {
  const about = props.content.about.values;
  const aboutList = about ? about.map((item) => <li>{item}</li>) : <></>;
  return (
    <li>
      <button className="edit" onClick={props.clickToEdit}>
        Edit
      </button>
      <div className="company">{props.content.company.value}</div>
      <div className="title">{props.content.title.value}</div>
      <div className="duration">
        <div className="start">{props.content.start.value}</div>
        <div className="end">{props.content.end.value}</div>
      </div>
      <ul className="about">{aboutList}</ul>
    </li>
  );
}

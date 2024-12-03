import "./Resume.css";
import "./Section";

import { ComponentElement, useState } from "react";
import { Form } from "./Form";

interface InfoItem {
  label: string;
  type?: string;
  value?: string;
  classes?: string;
}

interface InfoObject {
  [key: string]: InfoItem;
}

const basicInfo = {
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

const eduInfo = {
  school: { id: "school", label: "School", value: "" },
  degree: { id: "degree", label: "Degree", value: "" },
  start: { id: "start", label: "Start date", value: "" },
  end: { end: "end", label: "End date", value: "" },
};

const workInfo = [
  { label: "Company" },
  { label: "Title" },
  { label: "Start date" },
  { label: "End date" },
  { label: "About", type: "long", classes: "repeating" },
];

export function Resume() {
  return (
    <section>
      <InfoSection contentInfo={basicInfo} display={BasicsDisplay} />
      <InfoSection contentInfo={eduInfo} display={EduDisplay} />
    </section>
  );
}

function InfoSection(props: {
  contentInfo: InfoObject;
  display: React.ComponentType<{
    contents: InfoObject;
    clickToEdit: () => void;
  }>;
}) {
  const [contents, setContents] = useState(props.contentInfo);
  const [showForm, setShowForm] = useState(false);
  const formStructure = Object.values(contents);
  const submitContents = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newContents = { ...contents };
    console.log(formData);
    for (const [key, val] of Object.entries(newContents)) {
      if ("value" in val) {
        const formVal = formData.get(key);
        (newContents[key as keyof typeof newContents] as InfoItem).value =
          typeof formVal == "string" ? formVal : "";
      }
    }
    console.log(newContents);
    setContents(newContents);
    setShowForm(false);
  };

  if (showForm)
    return (
      <Form
        name="basic"
        structure={formStructure}
        formAction={submitContents}
      />
    );
  else
    return (
      <props.display
        contents={contents}
        clickToEdit={() => setShowForm(true)}
      />
    );
}

function BasicsDisplay({
  contents,
  clickToEdit,
}: {
  contents: InfoObject;
  clickToEdit: () => void;
}) {
  return (
    <section>
      <button className="edit" onClick={clickToEdit}>
        Edit
      </button>
      <h1>{contents.name.value}</h1>
      <h2>{contents.title.value}</h2>
      <div className="contact">
        <div className="phone">{contents.phone.value}</div>
        <div className="email">{contents.email.value}</div>
        <div className="location">{contents.location.value}</div>
      </div>
      <div className="sites">
        <div className="linkedin">{contents.linkedin.value}</div>
        <div className="github">{contents.github.value}</div>
        <div className="portfolio">{contents.portfolio.value}</div>
      </div>
    </section>
  );
}

function EduDisplay({
  contents,
  clickToEdit,
}: {
  contents: InfoObject;
  clickToEdit: () => void;
}) {
  return (
    <div className="education">
      <button className="edit" onClick={clickToEdit}>
        Edit
      </button>
      <div className="school">{contents.school.value}</div>
      <div className="degree">{contents.degree.value}</div>
      <div className="duration">
        <div className="start">{contents.start.value}</div>
        <div className="end">{contents.end.value}</div>
      </div>
    </div>
  );
}

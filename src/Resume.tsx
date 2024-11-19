import "./Resume.css";
import "./Section";

import { useState } from "react";
import { Form } from "./Form";

const basicInfo = {
  f1: { type: "header", label: "Basic info:" },
  name: { label: "Name", classes: "required", value: "" },
  title: { label: "Title", classes: "required", value: "" },
  phone: { label: "Phone Number", classes: "required", value: "" },
  email: { label: "Email", type: "email", classes: "required", value: "" },
  location: { label: "Location", classes: "required", value: "" },
  f2: { type: "header", label: "Your socials:" },
  linkedin: { label: "Linkedin", type: "url", value: "" },
  github: { label: "Github", type: "url", value: "" },
  portfolio: { label: "Portfolio", type: "url", value: "" },
};

const education = [
  { label: "School" },
  { label: "Degree" },
  { label: "Start date" },
  { label: "End date" },
];

const work = [
  { label: "Company" },
  { label: "Title" },
  { label: "Start date" },
  { label: "End date" },
  { label: "Start date" },
  { label: "About", type: "long", classes: "repeating" },
];

export function Resume() {
  return <Basics />;
}

function Basics() {
  const [contents, setContents] = useState(basicInfo);
  const [showForm, setShowForm] = useState(false);
  const submitContents = () => {};

  if (showForm)
    return (
      <Form
        name="basic"
        structure={Object.values(basicInfo)}
        onSubmit={submitContents}
      />
    );
  else
    return (
      <section>
        <button className="edit" onClick={() => setShowForm(!showForm)}>
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

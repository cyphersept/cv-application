import type { InfoObject } from "./Interfaces";
import { EditButton } from "./CustomButtons";

export function BasicDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  return (
    <>
      <div className="section-head">
        <EditButton clickFunc={props.clickToEdit} />
        <h1>{props.content.name.value}</h1>
      </div>
      <h2>{props.content.title.value}</h2>
      <div className="contact">
        <div className="phone">{props.content.phone.value}</div>
        <div className="email">{props.content.email.value}</div>
        <div className="location">{props.content.location.value}</div>
      </div>
      <div className="sites">
        <div className="linkedin">{props.content.linkedin.value}</div>
        <div className="github">{props.content.github.value}</div>
        <div className="portfolio">{props.content.portfolio.value}</div>
      </div>
    </>
  );
}

export function EduDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  return (
    <li className="li-section">
      <EditButton clickFunc={props.clickToEdit} />
      <div className="school">{props.content.school.value}</div>
      <div className="degree">{props.content.degree.value}</div>
      <div className="duration">
        <div className="start">{props.content.start.value}</div>
        <div className="end">{props.content.end.value}</div>
      </div>
    </li>
  );
}

export function WorkDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  const about = props.content.about.values;
  const aboutList = about ? about.map((item) => <li>{item}</li>) : <></>;
  return (
    <li className="li-section">
      <EditButton clickFunc={props.clickToEdit} />
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

export function AchieveDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  return (
    <li className="li-section">
      <EditButton clickFunc={props.clickToEdit} />
      <div className="title">{props.content.title.value}</div>
      <div className="date">{props.content.date.value}</div>
      <div className="description">{props.content.description.value}</div>
    </li>
  );
}

export function SkillDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  const skillsList = props.content.skills.values
    ? props.content.skills.values.map((el: string, i) => <li key={i}>{el}</li>)
    : [];
  return (
    <>
      <div className="section-head">
        <EditButton clickFunc={props.clickToEdit} />
        <h2>Skills</h2>
      </div>
      <ul>{skillsList}</ul>
    </>
  );
}

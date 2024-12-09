import type { InfoObject } from "./Interfaces";
import { EditButton } from "./CustomButtons";
import {
  FaLinkedin,
  FaSquareGithub,
  FaLink,
  FaPhone,
  FaEnvelope,
  FaHouse,
} from "react-icons/fa6";
import { ReactNode } from "react";

export function BasicDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  const c = props.content;
  return (
    <>
      <div className="section-head">
        <EditButton clickFunc={props.clickToEdit} />
        <h1>{c.name.value}</h1>
      </div>
      <h2>{c.title.value}</h2>
      <p>{c.summary.value}</p>
    </>
  );
}

export function ContactDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  const c = props.content;
  const p = "tel:+" + c.phone.value;
  const e = "mailto:" + c.email.value;
  const eSplit = c.email.value?.split("@") ?? ["", ""];
  const eDisplay = (
    <>
      {eSplit[0]}
      <wbr />
      {"@" + eSplit[1]}
    </>
  );
  return (
    <>
      <div className="section-head">
        <EditButton clickFunc={props.clickToEdit} />
        <h2>Contact</h2>
      </div>
      <ul>
        <LiA icon={<FaPhone />} name="phone" val={p} display={c.phone.value} />
        <LiA icon={<FaEnvelope />} name="email" val={e} display={eDisplay} />
        <LiA icon={<FaHouse />} name="location" val={c.location.value} />
        <LiA
          icon={<FaLinkedin />}
          name="linkedin"
          val={c.linkedin.value}
          display={c.linkedinDisplay.value}
        />
        <LiA
          icon={<FaSquareGithub />}
          name="github"
          val={c.github.value}
          display={c.githubDisplay.value}
        />
        <LiA
          icon={<FaLink />}
          name="portfolio"
          val={c.portfolio.value}
          display={c.portfolioDisplay.value}
        />
      </ul>
    </>
  );
}

function LiA(props: {
  icon: ReactNode;
  name: string;
  val?: string;
  display?: string | JSX.Element;
}) {
  return (
    <li className={props.name} hidden={props.val ? false : true}>
      <a href={props.val}>
        {props.icon}
        {props.display ?? props.val}
      </a>
    </li>
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

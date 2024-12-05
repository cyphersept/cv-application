import type { InfoObject } from "./Interfaces";

export function BasicDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
  return (
    <section>
      <button className="edit" onClick={props.clickToEdit}>
        Edit
      </button>
      <h1>{props.content.name.value}</h1>
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
    </section>
  );
}

export function EduDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
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

export function WorkDisplay(props: {
  content: InfoObject;
  clickToEdit: () => void;
}) {
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

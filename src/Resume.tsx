import "./Resume.css";
import type { InfoObject } from "./Interfaces";
import { InfoSection } from "./InfoSection";
import {
  BasicDisplay,
  EduDisplay,
  WorkDisplay,
  AchieveDisplay,
  SkillDisplay,
} from "./Displays";
import { Factories as Create } from "./Factories";
import { Monkey } from "./Monkey";
import { useState } from "react";
import { AddButton } from "./CustomButtons";

export function Resume() {
  // Set initial values from template
  const [eduState, setEduState] = useState(Monkey.edu);
  const [workState, setWorkState] = useState(Monkey.work);
  const [achieveState, setAchieveState] = useState(Monkey.achievements);

  // Render InfoSections that can display info or edit in form for every entry in each section
  const eduItems = eduState.map((info: InfoObject, ind: number) => (
    <InfoSection contentInfo={info} display={EduDisplay} key={ind} />
  ));

  const workItems = workState.map((info: InfoObject, ind: number) => (
    <InfoSection contentInfo={info} display={WorkDisplay} key={ind} />
  ));
  const achieveItems = achieveState.map((info: InfoObject, ind: number) => (
    <InfoSection contentInfo={info} display={AchieveDisplay} key={ind} />
  ));

  // Add another work/education/achievement subsection when clicked
  const addEdu = () => setEduState(eduState.concat([Create.edu()]));
  const addWork = () => setWorkState(workState.concat([Create.work()]));
  const addAch = () => setAchieveState(achieveState.concat([Create.achieve()]));

  return (
    <>
      <section className="basic">
        <InfoSection contentInfo={Monkey.basic} display={BasicDisplay} />
      </section>

      <section className="education">
        <h2>Education</h2>
        <AddButton clickFunc={addEdu} />
        <ul>{eduItems}</ul>
      </section>

      <section className="work">
        <h2>Work History</h2>
        <AddButton clickFunc={addWork} />
        <ul>{workItems}</ul>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <AddButton clickFunc={addAch} />
        <ul>{achieveItems}</ul>
      </section>

      <section className="skills">
        <InfoSection contentInfo={Monkey.skills} display={SkillDisplay} />
      </section>
    </>
  );
}

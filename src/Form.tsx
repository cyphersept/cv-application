import { useState } from "react";
import "./Form.css";
import { AddButton, RemoveButton } from "./CustomButtons";
import type { InfoItem } from "./Interfaces";

export function Form(props: {
  name: string;
  formAction: (event: React.FormEvent<HTMLFormElement>) => void;
  structure: InfoItem[];
}) {
  const renderedForm = props.structure.map((obj) => {
    if (obj.type === "header") return <h2>{obj.label}</h2>;
    else if (Object.prototype.hasOwnProperty.call(obj, "values"))
      return (
        <RepeatableField
          values={obj.values}
          defaultVal={obj.value}
          label={obj.label}
          classes={obj.classes}
          type={obj.type}
          id={obj.id}
        />
      );
    else if (obj.type === "textarea")
      return (
        <label className={obj.classes}>
          {obj.label}:
          <textarea name={obj.id} defaultValue={obj.value} />
        </label>
      );
    else
      return (
        <FormField
          value={obj.value}
          label={obj.label}
          classes={obj.classes}
          type={obj.type}
          id={obj.id}
        />
      );
  });
  return (
    <form onSubmit={props.formAction} name={props.name} id={props.name}>
      {renderedForm}
      <button type="submit">Submit</button>
    </form>
  );
}

// Normal single form input element
function FormField(props: {
  value?: string; // default value
  label?: string; // label text
  classes?: string; // classes for label
  type?: string; // input type
  id?: string; // input name parameter
}) {
  return (
    <label className={props.classes}>
      {props.label}:
      <input type={props.type} defaultValue={props.value} name={props.id} />
    </label>
  );
}

// Repeated fieldset with multiple inputs for one type of value
function RepeatableField(props: {
  defaultVal?: string; // default value
  values?: string[]; // list of all values
  label?: string; // label text
  classes?: string; // classes for label
  type?: string; // input type
  id?: string; // input name parameter
}) {
  // Generate separate input field element for each value
  const [fields, setFields] = useState(props.values ?? []);
  const fieldsDisplay = fields.map((_, index: number) => (
    <li className="repeat-field" key={index}>
      <label title="Add work details" aria-label="Work detail">
        <input type={props.type} defaultValue={fields[index]} name={props.id} />
        <RemoveButton
          clickFunc={() => {
            const newEntries = fields;
            setFields(newEntries.splice(index, 1));
          }}
        />
      </label>
    </li>
  ));

  return (
    <fieldset className={props.classes}>
      <legend>{props.label}</legend>
      {fieldsDisplay}
      <AddButton
        clickFunc={() => setFields(fields.concat([props.defaultVal ?? ""]))}
      />
    </fieldset>
  );
}

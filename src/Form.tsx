import { useState } from "react";
import "./Form.css";
import { RiAddCircleFill, RiIndeterminateCircleFill } from "./Icons";
import type { InfoItem } from "./Interfaces";

export function Form(props: {
  name: string;
  formAction: (event: React.FormEvent<HTMLFormElement>) => void;
  structure: InfoItem[];
}) {
  const renderedForm = props.structure.map((obj) => {
    if (obj.type === "header") return <h2>{obj.label}</h2>;
    else if (obj.classes?.includes("repeating"))
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
function FormField({
  value = "", // default field value
  label = "My Field", // text label for field
  classes = "", // classes to apply to input element
  type = "text", //input type
  id = "",
}) {
  return (
    <label className={classes}>
      {label}:
      <input type={type} defaultValue={value} name={id} />
    </label>
  );
}

function RepeatableField({
  defaultVal = "", // default field value
  values = [""],
  label = "My Field", // text label for field
  classes = "", // classes to apply to input element
  type = "text", //input type
  id = "",
}) {
  const [fieldEntries, setFieldEntries] = useState(values);
  const fields = fieldEntries.map((_, index: number) => (
    <li className="repeat-field" key={index}>
      <label title="Add work details" aria-label="Work detail">
        <input type={type} defaultValue={fieldEntries[index]} name={id} />
      </label>
      <button
        type="button"
        className="remove"
        onClick={() => {
          const newEntries = fieldEntries;
          setFieldEntries(newEntries.splice(index, 1));
        }}
      >
        <RiIndeterminateCircleFill />
      </button>
    </li>
  ));

  return (
    <fieldset className={classes}>
      <legend>{label}</legend>
      <button
        type="button"
        className="add"
        // Adds new field with default value to end of list
        onClick={() => setFieldEntries(fieldEntries.concat([defaultVal]))}
      >
        <RiAddCircleFill />
      </button>
      {fields}
    </fieldset>
  );
}

import {
  createContext,
  useContext,
  FormEvent,
  useState,
  ReactElement,
} from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import "./Form.css";
import type { SVGProps } from "react";

interface FormProps {
  fields: {
    field: string;
    label: string;
    classes: string;
    type: string;
    repeatable: boolean;
  }[];
  onSubmit: string; //{ onSubmit: () => void };
}

export function Form({ fields, onSubmit }: FormProps) {
  const formMethods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = formMethods;

  const fieldsList = fields.map((e) => (
    <FormField
      field={e.field}
      label={e.label}
      classes={e.classes}
      type={e.type}
      repeatable={e.repeatable}
    />
  ));

  return (
    <FormProvider {...formMethods}>
      <form action={onSubmit}>
        <EditableVal></EditableVal>
      </form>
    </FormProvider>
  );
}

function FormField({
  field = "", // default field value
  label = "My Field", // text label for field
  classes = "", // classes to apply to input element
  type = "text", //input type
  repeatable = false,
}) {
  const [myField, setMyField] = useState(field);

  return type == "label" ? (
    <h2>{label}</h2>
  ) : (
    <label>
      {label}:
      <input
        type={type}
        className={classes}
        value={myField}
        onChange={(e) => setMyField(e.target.value)}
      />
      {repeatable && <button type="button" onClick={duplicateField}></button>}
    </label>
  );
}

function RepeatableField({
  field = "", // default field value
  label = "My Field", // text label for field
  classes = "", // classes to apply to input element
  type = "text", //input type
}) {
  const [fieldEntries, setFieldEntries] = useState([field]);
  const fields = fieldEntries.map((_, index: number) => (
    <div className="repeat-field">
      <input
        type={type}
        className={classes}
        value={fieldEntries[index]}
        onChange={(e) => {
          fieldEntries[index] = e.target.value;
          setFieldEntries(fieldEntries);
        }}
      />
      <button
        type="button"
        className="remove"
        // Removes this repeated field from the list
        onClick={() => {
          fieldEntries.splice(index, 1);
          setFieldEntries(fieldEntries);
        }}
      >
        <RiIndeterminateCircleFill />
      </button>
    </div>
  ));

  return (
    <div>
      <h3 className={classes}>{label}</h3>
      <button
        type="button"
        className="add"
        // Adds new field with default value to end of list
        onClick={() => setFieldEntries(fieldEntries.concat([field]))}
      >
        <RiAddCircleFill />
      </button>
      {fields}
    </div>
  );
}

// https://stackoverflow.com/questions/65933118/react-onchange-event-for-contenteditable-attribute
function EditableVal({ registerAs = "default" }) {
  const { register, setValue } = useFormContext();
  //   const [val, setVal] = useState(defaultVal);
  const onInput = (e: FormEvent<HTMLInputElement>) => {
    setValue(registerAs, e.currentTarget.innerText);
  };

  return (
    <div>
      <input type="hidden" {...register(registerAs)} />
      <p contentEditable="true" onInput={onInput}></p>
    </div>
  );
}

export function RiAddCircleFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2z"
      ></path>
    </svg>
  );
}

export function RiIndeterminateCircleFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M7 11v2h10v-2z"
      ></path>
    </svg>
  );
}

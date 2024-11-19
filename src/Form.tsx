import {
  createContext,
  useContext,
  FormEvent,
  useState,
  ReactElement,
} from "react";
// import { useForm, FormProvider, useFormContext } from "react-hook-form";
import "./Form.css";
import type { SVGProps } from "react";

// interface FormProps {
//   fields: {
//     field: string;
//     label: string;
//     classes: string;
//     type: string;
//     repeatable: boolean;
//   }[];
//   onSubmit: string; //{ onSubmit: () => void };
// }

// export function Form({ fields, onSubmit }: FormProps) {
//   const formMethods = useForm();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//   } = formMethods;

//   const fieldsList = fields.map((e) => (
//     <FormField
//       field={e.field}
//       label={e.label}
//       classes={e.classes}
//       type={e.type}
//       repeatable={e.repeatable}
//     />
//   ));

//   return (
//     <FormProvider {...formMethods}>
//       <form action={onSubmit}>
//         <EditableVal></EditableVal>
//       </form>
//     </FormProvider>
//   );
// }

export function Form({
  name,
  structure,
}: {
  name: string;
  structure: {
    label: string;
    value?: string;
    classes?: string;
    type?: string;
    repeatable?: boolean;
  }[];
}) {
  const renderedForm = structure.map((obj) => {
    if (obj.type === "header") return <h2>{obj.label}</h2>;
    else if (obj.repeatable === true)
      return (
        <RepeatableField
          value={obj.value}
          label={obj.label}
          classes={obj.classes}
          type={obj.type}
        />
      );
    else
      return (
        <FormField
          value={obj.value}
          label={obj.label}
          classes={obj.classes}
          type={obj.type}
        />
      );
  });
  return (
    <form action="" name={name} id={name}>
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
}) {
  const [myField, setMyField] = useState(value);

  return (
    <label className={classes}>
      {label}:
      <input
        type={type}
        value={myField}
        onChange={(e) => setMyField(e.target.value)}
      />
    </label>
  );
}

function RepeatableField({
  value = "", // default field value
  label = "My Field", // text label for field
  classes = "", // classes to apply to input element
  type = "text", //input type
}) {
  const [fieldEntries, setFieldEntries] = useState([value]);
  const fields = fieldEntries.map((_, index: number) => (
    <div className="repeat-field">
      <input
        type={type}
        value={fieldEntries[index]}
        onChange={(e) => {
          fieldEntries[index] = e.target.value;
          setFieldEntries(fieldEntries);
        }}
      />
      // Deletes this repeated field when clicked
      <button
        type="button"
        className="remove"
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
    <fieldset className={classes}>
      <legend>{label}</legend>
      <button
        type="button"
        className="add"
        // Adds new field with default value to end of list
        onClick={() => setFieldEntries(fieldEntries.concat([value]))}
      >
        <RiAddCircleFill />
      </button>
      {fields}
    </fieldset>
  );
}

// // https://stackoverflow.com/questions/65933118/react-onchange-event-for-contenteditable-attribute
// function EditableVal({ registerAs = "default" }) {
//   const { register, setValue } = useFormContext();
//   //   const [val, setVal] = useState(defaultVal);
//   const onInput = (e: FormEvent<HTMLInputElement>) => {
//     setValue(registerAs, e.currentTarget.innerText);
//   };

//   return (
//     <div>
//       <input type="hidden" {...register(registerAs)} />
//       <p contentEditable="true" onInput={onInput}></p>
//     </div>
//   );
// }

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

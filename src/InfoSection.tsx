import { useState } from "react";
import type { InfoItem, InfoObject } from "./Interfaces";
import { Form } from "./Form";

export function InfoSection(props: {
  contentInfo: InfoObject;
  display: React.ComponentType<{
    content: InfoObject;
    clickToEdit: () => void;
  }>;
}) {
  const [content, setContent] = useState(props.contentInfo);
  const [showForm, setShowForm] = useState(false);
  const formStructure = Object.values(content);
  // Get and save form contents on submit
  const submitContent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newContent = { ...content };
    console.log(newContent);
    // Updates every value defined in the form's contentInfo structure
    for (const [key, val] of Object.entries(newContent)) {
      // Gets repeating field values from FormData
      if ("values" in val && typeof val.id == "string") {
        const newArr = formData.getAll(val.id) as string[];
        (newContent[key as keyof typeof newContent] as InfoItem).values =
          newArr;
      }
      // Gets single field value from FormData
      else if ("value" in val) {
        const formVal = formData.get(key);
        (newContent[key as keyof typeof newContent] as InfoItem).value =
          typeof formVal == "string" ? formVal : "";
      }
    }
    console.log(newContent);
    setContent(newContent);
    setShowForm(false);
  };

  if (showForm)
    return (
      <Form name="basic" structure={formStructure} formAction={submitContent} />
    );
  else
    return (
      <props.display content={content} clickToEdit={() => setShowForm(true)} />
    );
}

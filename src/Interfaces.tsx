// Parameteres to generate form item with
export interface InfoItem {
  label: string;
  id?: string;
  type?: string;
  value?: string;
  values?: string[];
  classes?: string;
}

// An object representing form structure, where each property is a form element to be generated
export interface InfoObject {
  [key: string]: InfoItem;
}

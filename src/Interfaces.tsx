export interface InfoItem {
  label: string;
  id?: string;
  type?: string;
  value?: string;
  values?: string[];
  classes?: string;
}

export interface InfoObject {
  [key: string]: InfoItem;
}

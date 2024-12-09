import {
  RiAddCircleFill,
  RiIndeterminateCircleFill,
  RiEdit2Fill,
} from "react-icons/ri";

export function RemoveButton({ clickFunc }: { clickFunc: () => void }) {
  return (
    <button type="button" className="remove" onClick={clickFunc}>
      <RiIndeterminateCircleFill />
    </button>
  );
}

export function AddButton({ clickFunc }: { clickFunc: () => void }) {
  return (
    <button type="button" className="add" onClick={clickFunc}>
      <RiAddCircleFill />
    </button>
  );
}

export function EditButton({ clickFunc }: { clickFunc: () => void }) {
  return (
    <button type="button" className="edit" onClick={clickFunc}>
      <RiEdit2Fill />
    </button>
  );
}

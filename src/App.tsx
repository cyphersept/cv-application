import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";

function App() {
  const [count, setCount] = useState(0);
  // const formFields = [
  //   { type: "h2", label: "Basic info:" },
  //   { label: "First Name", classes: "required" },
  //   { label: "Last Name", classes: "required" },
  //   { label: "Phone Number", classes: "required" },
  //   { label: "Email", type: "email", classes: "required" },
  //   { type: "h2", label: "Your socials:" },
  //   { label: "Linkedin", type: "url" },
  //   { label: "Github", type: "url" },
  //   { label: "Portfolio", type: "url" },
  //   { type: "h2", label: "Your education:" },
  //   { label: "Education", classes: "paraBox" },
  // ];

  return (
    <>
      <Resume />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

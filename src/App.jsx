import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";

const App = () => (
  <div>
    <p>Hi there, I'm the consumer application and I'm consuming {`Modal`} from the
    host dynamically.</p>
    <div>{/* <Modal>Hmmm</Modal> */}</div>
  </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);

// import("App/Employees/count").then((module) => {
//   const Count = module.default;
//   new Count({
//     target: el1,
//     props: {
//       // filter: { where:{ "postalCode":44000 } },
//       // css: "background-color: rgb(204 90 113 / var(--tw-bg-opacity));"
//       // css: "display: none;"
//     },
//   });
// });

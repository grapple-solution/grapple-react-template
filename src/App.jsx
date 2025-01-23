// import React from "react";
// import "./index.css";
// import { createRoot } from "react-dom/client";

// const App = () => (
//   <div>
//     <p className="react-app">React App</p>
//   </div>
// );

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);

// import a module from the grapple UI modules (gruim)

import("App/Customers").then((module) => {
  const MyCustomers = module.default;
  new MyCustomers({
    target: app,
    layout: "auto",
    props: {
      filter: { limit: 10 },
    },
  });
});
π;

import { createRoot } from "react-dom/client";
import App from "./App";

const target = document.getElementById("app");
if (!target) {
  throw new Error("Application root element was not found");
}

createRoot(target).render(<App />);

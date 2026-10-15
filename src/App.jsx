import { useEffect, useRef } from "react";
import "./index.css";

const fieldProperties = {
  "field-order": [
    "id",
    "customerName",
    "contactLastName",
    "contactFirstName",
    "postalCode",
    "city",
    "country",
  ],
  "hidden-fields": ["state", "addressLine2", "creditLimit"],
  "date-fields": [
    { name: "orderDate", type: "date" },
    { name: "shippedDate", type: "time" },
  ],
};

export default function App() {
  const countElement = useRef(null);
  const findByIdElement = useRef(null);
  const findElement = useRef(null);

  useEffect(() => {
    const components = [];

    import("App/Employees/count").then((module) => {
      components.push(
        new module.default({ target: countElement.current }),
      );
    });

    import("App/Employees/findById").then((module) => {
      components.push(
        new module.default({
          target: findByIdElement.current,
          props: { id: 1002, schema: { "field-properties": fieldProperties } },
        }),
      );
    });

    import("App/Employees/find").then((module) => {
      components.push(
        new module.default({
          target: findElement.current,
          props: {
            filter: { limit: 10 },
            schema: { "field-properties": fieldProperties },
            translation: {
              customerName: "Name des Kunden",
              contactLastName: "Nachname",
              contactFirstName: "Vorname",
              postalCode: "PLZ",
              city: "Ort",
              "No more items": "Es gibt keine weiteren Elemente mit diesen Kriterien",
              "Load More": "Weitere Elemente anzeigen",
            },
            enableFilter: false,
            enableLoadMore: false,
          },
        }),
      );
    });

    return () => components.forEach((component) => component.$destroy());
  }, []);

  return (
    <main className="max-w-6xl m-auto flex p-8">
      <div className="p-8 grid gap-3">
        <div className="uimodule" ref={countElement} style={{ width: 350 }} />
        <div className="uimodule" ref={findByIdElement} />
        <div className="uimodule" ref={findElement} />
      </div>
    </main>
  );
}

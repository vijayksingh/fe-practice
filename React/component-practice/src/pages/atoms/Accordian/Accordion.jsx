import { createContext, useContext } from "react";
import { useToggle } from "../../../hooks/useToggle";
import "./styles.css";
// remove props validation warning only eslint
/* eslint-disable */

const AccordionContext = createContext();

const { Provider } = AccordionContext;

function Accordion({ title, content }) {
  const { status: expand, toggle } = useToggle();
  const value = { expand, toggle };
  return (
    <Provider value={value}>
      <div className="accordion">
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionContent />
        {content}
        <AccordionContent />
      </div>
    </Provider>
  );
}

function AccordionHeader({ children }) {
  const { expand, toggle } = useContext(AccordionContext);
  return (
    <button onClick={toggle}>
      {children} <span>{expand ? "-" : "+"}</span>
    </button>
  );
}

function AccordionContent({ children }) {
  const { expand } = useContext(AccordionContext);
  console.log(expand);
  return <>{expand && <div className="content">{children}</div>}</>;
}

function DemoAccordian() {
  return (
    <div className="App">
      <Accordion
        title={"HTML"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam aliquam tempore ducimus ad rem dolor, porro dolores tenetur totam natus eum accusantium labore consequuntur odio, quo nostrum laboriosam assumenda fugit."
        }
      />
    </div>
  );
}

export default DemoAccordian;

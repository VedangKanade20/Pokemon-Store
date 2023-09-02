import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <>
      <Heading />
      <div className="Data">
        <Pokemon />
      </div>
    </>
  );
};

const Heading = () => {
  return <h1 className="heading"> Welcome to Pokemon Store !!!</h1>;
};

const Pokemon = (props) => {
  return (
    <section className="descr">
      <image src={props.image} />
      <h1>{props.image}</h1>
      <h1>{props.price}</h1>
      <h1>{props.pet}</h1>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

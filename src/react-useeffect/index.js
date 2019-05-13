import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const Count = props => {
  const [count, setCount] = useState(0);

  useEffect(
    x => {
      console.log(">> use effect ");

      return () => {
        console.log("Bye...Bye");
      };
    },
    [props.props]
  );

  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count :{count}</h1>
      <p>
        <button onClick={Increment}>+</button>
      </p>
    </div>
  );
};

const App = () => {
  const [show, setShow] = useState(true);

  const hide = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>React use effect </h1>
      {show && <Count show={show} />}
      <button onClick={hide}>Toggle Counter</button>
    </div>
  );
};

render(<App />, document.getElementById("app"));

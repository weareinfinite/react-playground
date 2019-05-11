import React, { useState } from "react";
import { render } from "react-dom";

const App = () => {
  let [state, setState] = useState({
    peoples: [{ name: "Sarath" }],
    person: { name: "" }
  });
  console.log("state", state);

  const onChange = e => {
    setState({
      ...state,
      person: { ...state.person, [e.target.name]: e.target.value }
    });
  };

  const addPerson = () => {
    let peeps = [...state.peoples, state.person];

    setState({
      peoples: peeps,
      person: { name: "" }
    });
  };
  return (
    <div>
      <h1>React useState() example </h1>
      {state.peoples.map(p => (
        <p key={p.name}>{p.name}</p>
      ))}

      <div>
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={state.person.name}
        />
        <button onClick={addPerson}>Add</button>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("app"));

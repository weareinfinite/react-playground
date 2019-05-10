import React, { createContext } from "react";
import { render } from "react-dom";

const TheContext = createContext("Opps");

const App = () => (
  <div>
    <TheContext.Provider value="Very Secret mission ">
      <h1>React Context Example</h1>
      <Mission />
    </TheContext.Provider>
  </div>
);

const Mission = props => (
  <div style={{ border: "1px dotted #f56", padding: "10px" }}>
    The Mission
    <Secret />
  </div>
);

class Secret extends React.Component {
  render() {
    return (
      <div>
        <TheContext.Consumer>
          {context => (
            <div>
              <h3>{context}</h3>
            </div>
          )}
        </TheContext.Consumer>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));

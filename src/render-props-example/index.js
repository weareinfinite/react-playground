import React from "react";
import { render } from "react-dom";

class MiniFormik extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.initialValues || {}
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler() {
    this.props.onSubmit(this.state.values);
  }

  /**
   * Handle change
   * @param {*} event
   */
  onChangeHandler(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState(prevState => {
      return {
        values: { ...prevState.values, [name]: value }
      };
    });
  }
  render() {
    return this.props.children({
      ...this.state,
      onChangeHandler: this.onChangeHandler,
      onSubmitHandler: this.onSubmitHandler
    });
  }
}

const App = () => (
  <div>
    <h1>Main App</h1>
    <MiniFormik
      initialValues={{ name: "Sarath", email: "" }}
      onSubmit={values => {
        alert(JSON.stringify(values));
      }}
    >
      {({ values, onChangeHandler, onSubmitHandler }) => (
        <form onSubmit={onSubmitHandler}>
          Hello {name}
          <div>
            <input name="name" value={values.name} onChange={onChangeHandler} />
            <input
              name="email"
              value={values.email}
              onChange={onChangeHandler}
            />
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </MiniFormik>
  </div>
);

render(<App />, document.getElementById("app"));

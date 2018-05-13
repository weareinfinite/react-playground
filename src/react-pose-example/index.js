import React from 'react';
import { render } from 'react-dom';
import posed from 'react-pose';
console.log(posed)

const Box = posed.div({
    idle: { scale: 1, x: 0 },
    hovered: { scale: 1.2, x: '5%' }
});


class App extends React.Component {

    constructor(props) {

        super(props);
        this.state = { hovering: false };
    }

    render() {
        return (
            <div>
                <h1>React Pose</h1>
                <Box className="box" pose={this.state.hovering ? "hovered" : "idle"}
                  onMouseEnter={() => this.setState({ hovering: true })}
                  onMouseLeave={() => this.setState({ hovering: false })}/>
            </div>
        )
    }

}

render(<App/>, document.getElementById('app'))
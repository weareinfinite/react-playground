import React from 'react';
import { render } from 'react-dom';
import VanillaTilt  from 'vanilla-tilt';

import './index.css';

class Tilt extends React.Component {

    constructor(props) {
        super(props);
        this.el = null;
    }

    componentDidMount() {

        VanillaTilt.init(this.el,{
            max: 25,
		speed: 400
        })

    }


    render() {
        return(
            <div ref={(e) => this.el = e} className="div-tilt">
                <div className="tilt-child">
                    <div {...this.props}/>
                </div>
            </div>
        )
    }
}

const App = () => (
    <div>
        <h1>Sample App</h1>
        <Tilt><h1>Sarath</h1></Tilt>

    </div>
)

render(<App/>, document.getElementById('app'))
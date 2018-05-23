import React, { createRef } from 'react';
import { render } from 'react-dom';
import VanillaTilt  from 'vanilla-tilt';

import './index.css';

class Tilt extends React.Component {

    constructor(props) {
        super(props);
        this.el = createRef();
    }

    componentDidMount() {


        VanillaTilt.init(this.el.current,{
            max: 25,
		speed: 400
        })

    }


    render() {
        return(
            <div ref={ this.el } className="div-tilt">
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
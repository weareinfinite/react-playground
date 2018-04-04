import React from 'react';
import { render } from 'react-dom';
import classnames from 'classnames';
import './style.css';

 class App extends React.Component {

    constructor(props) {

        super(props)

        this.state = { danger: false} 

    }

    componentDidMount() {

        setInterval(()=> {
            this.setState({ danger: !this.state.danger })
        },3000)
    }


    render() {
        return (
            <div>
                {/* Using only  React */}
                <h1 className={ this.state.danger === true ? 'red': 'blue'}>Using Only React</h1>
                {/* Using classnames library */}
                <h1 className={ classnames({'red': this.state.danger},{'alert': this.state.danger})}>Using Classnames lib</h1>
            </div>
        )
    }
 

}

render(<App/>, document.getElementById('app'))
import React from 'react';
import { render } from 'react-dom';
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
        return (<h1 className={ this.state.danger === true ? 'red': 'blue'}>Sample App</h1>)
    }
 

}

render(<App/>, document.getElementById('app'))
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props)
        console.log('1 : cunstructor')
        this.state = {
            count:0
        }
    }

    
    componentWillMount() {
        console.log(`2 : componentWillMount`)
    }
    render() {
        let { count } = this.state;
        console.log(`3 : render`)
        
        return (
            <div>
            <h1>Life Cycle Hooks {count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
            </div>
        )
    }
    
    componentDidMount() {
        console.log(`4 : componentDidMount`)
    }
    /** State / Props Changes */
    componentWillReceiveProps(){
        console.log(`> componentWillReceiveProps`)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`> shouldComponentUpdate`)
        console.log(nextProps, nextState);
        return true;
    }

    componentWillUpdate() {
        console.log(`> componentWillUpdate`)
    }

    componentDidUpdate() {
        console.log(`> componentDidUpdate`)
    }
}

render(<App name="Sarath"/>, document.getElementById('app'))
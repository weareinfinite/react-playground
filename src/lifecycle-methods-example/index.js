import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
    
    constructor(props) {
        super(props)
        console.log('1 : cunstructor')
        this.state = {
            count:props.initialCount
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
            <h2>Life Cycle Hooks {count}</h2>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
            </div>
        )
    }
    
    componentDidMount() {
        console.log(`4 : componentDidMount`)
    }

    componentWillUnmount() {
        console.log(`< ComponentWilUnmount`)
    }
    /** State / Props Changes */
    componentWillReceiveProps(nextProps){
        console.log(`> componentWillReceiveProps`, nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`> shouldComponentUpdate`)
        console.log(nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(`> componentWillUpdate`)
        console.log(`Next Props `, nextProps)
        console.log(`Next States `, nextState)
    }

    componentDidUpdate() {
        console.log(`> componentDidUpdate`)
    }

    // Catch Errors

    componentDidCatch(error, info) {

        console.log(`!! ERRORS componentDidCatch`, error, info)

    }
}

Counter.defaultProps = {
    initialCount:0
}

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showCouter: true,
            countFrom:0
        }
    }

    render() {
        const { showCouter } = this.state;
        return (
            <div>
                <h1>The App </h1>
                <button onClick={()=> {this.setState({countFrom:10})}}>Count From 10</button>
                <button onClick={() => { this.setState({showCouter: !this.state.showCouter})}}>Toggle Counter</button>
                { showCouter && <Counter initialCount={this.state.countFrom} /> }
                
            </div>
        )
    }
}

render(<App name="Sarath"/>, document.getElementById('app'))
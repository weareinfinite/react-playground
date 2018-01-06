import React from 'react';
import { connect } from 'react-redux';
const Counter = (props) => {
    
return (
    <div>
        <h1> Counter {props.count}</h1>
        <button onClick={() => props.dispatch({type:'INCREMENT'})}>+</button>
        <button onClick={() => props.dispatch({type:'DECREMENT'})}>-</button>
    </div>
    )
}

function mapStetToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStetToProps, null)(Counter);


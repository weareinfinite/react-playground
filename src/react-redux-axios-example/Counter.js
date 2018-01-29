import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementAsync } from './actions';
const Counter = (props) => {
    
return (
    <div>
        <h1> Counter {props.count}</h1>
        <button onClick={() => props.increment()}>+</button>
        <button onClick={() => props.decrement()}>-</button>
        <button onClick={() => props.incrementAsync()}>+ Async (Wait 3 seconds)</button>
    </div>
    )
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         increment: () => { dispatch(increment()) },
//         decrement: () => { dispatch(decrement()) }
//     }
// }

export default connect(mapStateToProps, {increment, decrement, incrementAsync})(Counter);


import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';



// Count Reducer 

function countReducer( state=0, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}


// Create store using count reducer

const store = createStore(countReducer);

const App = (props) => (
    <div>
        <h1>Counter  { props.count }</h1>
        <button onClick={ () => store.dispatch({ type: 'INCREMENT'})}>+</button>
        <button onClick={() => store.dispatch({ type: 'DECREMENT'})}>-</button>
    </div>
    
)


const appRender = () => {

    let countState = store.getState();
    render(<App count={ countState }/>, document.getElementById('app'));
}

// Subscribe State change

store.subscribe(()=> {
    console.log('>', store.getState());
    appRender();
})

store.dispatch({ type: ""});
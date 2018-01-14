const reducer = (state = { count: 0}, action) => {
    let newState = state;
    switch(action.type) {
        case 'INCREMENT' :
            newState = { count : state.count + 1 }
            return newState;
        case 'DECREMENT' :
            newState = { count : state.count - 1 }
            return newState;
        default: 
            return newState; 
    }
}

export default reducer
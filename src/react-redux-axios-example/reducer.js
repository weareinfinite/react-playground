const reducer = (state = { count: 0, user: null}, action) => {
    let newState = state;
    switch(action.type) {
        case 'INCREMENT' :
            newState = {...state, count : state.count + 1 }
            return newState;
        case 'DECREMENT' :
            newState = {...state, count : state.count - 1 }
            return newState;
        case 'GET_PROFILE' :
            newState = { ...state, user: action.payload};
            return newState;
        default: 
            return newState; 
    }
}

export default reducer
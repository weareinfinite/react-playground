
export function increment() {
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

export function incrementAsync()  {
    return function(dispatch) {
        setTimeout(function() {
            dispatch(increment());
        },3000)
    }
}
import axios from 'axios'

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

export function getProfile(username) {

    return (dispatch) => {
        return axios.get(`https://api.github.com/users/${username}`)
            .then((response) => {
                dispatch({type: 'GET_PROFILE', payload: response.data})
            })
    }
    
}
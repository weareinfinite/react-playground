import { database } from '../shared/firebase';
import { mapObject} from '../shared/utls';

const todoRef = database.ref('todos')

export function getTodos() {
    return (dispatch) => {
        todoRef.off();
        todoRef.on('value',(snapshot)=> {
            let _todos = mapObject(snapshot.val());
            dispatch({ type: 'FETCH_TODOS',payload: _todos})
        })
    }
}

export function createTodo(todo) {
    return (dispatch) => {
        return todoRef.push(todo).then(()=>{
            dispatch({type:"TODO_CREATED",palyload: true})
        })
    }
}
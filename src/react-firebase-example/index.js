import React from 'react';
import { render } from 'react-dom';

import { database } from '../shared/firebase';
import { mapObject} from '../shared/utls';
import style from './index.css'


const todoRef= database.ref('todos');

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        todoRef.off();
        todoRef.on('value', (snapshot) => {

            let _todos = mapObject(snapshot.val());
            this.setState({todos: _todos});

        })
    }

    updateTodo(todo) {

        todoRef.child(todo.id).set(todo);

    }

    
    render() {

        let { todos } = this.state;

        return (
            <div className="todo-app">
                <h1>Sample  App</h1>
                    <div className="todos">
                        { todos.map((td) => <div className="todo-item" key={td.id}>
                        
                           <label> <input type="checkbox" checked={td.completed} onChange={(e) => {
                               td.completed = e.target.checked;
                               this.updateTodo(td)

                           }} />{td.text} : {td.completed ? 'Completed': 'Not Completed'}</label>
                        
                        
                        </div>) }
                    </div>
            </div>
        )

    }
}

render(<App/>, document.getElementById('app'))
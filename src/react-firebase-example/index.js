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
            todos: [],
            newTodo:{
                text: '',
                completed: false
            },
            isloading: true
        }

        this.inputChange = this.inputChange.bind(this);
    }

    componentDidMount() {
        todoRef.off();
        todoRef.on('value', (snapshot) => {

            let _todos = mapObject(snapshot.val());
            this.setState({todos: _todos, isloading: false});

        })
    }

    createTodo() {
        todoRef.push(this.state.newTodo).then((d) => {
            console.log('Yep')
            this.setState({ newTodo: {text:"", completed: false}})
        })
    }
    updateTodo(todo) {

        todoRef.child(todo.id).set(todo);

    }

    removeTodo(todo) {

        todoRef.child(todo.id).remove();

    }

    inputChange(e) {

        let {newTodo} = this.state;
        newTodo.text = e.target.value;
        this.setState({newTodo: newTodo});

    }

    
    render() {

        let { todos } = this.state;

        return (
            <div className="todo-app">
                <h1>Sample  App</h1>
                    <div>
                        <input type="text" value={this.state.newTodo.text} onChange={this.inputChange}/>
                        <button  onClick={(e) => {


                            this.createTodo()

                        }}>ADD</button>
                    </div>  
                    <div className="todos">
                        { todos.map((td) => <div className="todo-item" key={td.id}>
                        
                           <label> <input type="checkbox" checked={td.completed} onChange={(e) => {
                               td.completed = e.target.checked;
                               this.updateTodo(td)

                           }} />{td.text} : {td.completed ? 'Completed': 'Not Completed'}</label>
                           <button className="todo-item__remove" onClick={(e) => {

                               this.removeTodo(td);

                           }}>&times;</button>
                        
                        </div>) }
                    </div>
            </div>
        )

    }
}

render(<App/>, document.getElementById('app'))
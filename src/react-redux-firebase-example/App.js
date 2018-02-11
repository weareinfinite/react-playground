import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodos, createTodo } from './actions'
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            completed: false
        }

        this.inputOnChange = this.inputOnChange.bind(this)
        this.createTodo = this.createTodo.bind(this)
    }

    componentWillMount() {
        this.props.getTodos()
    }

    inputOnChange(e) {

        this.setState({[e.target.name]: e.target.value});

    }

    createTodo(e) {
        console.log('Creating new todo')
        e.preventDefault();
        this.props.createTodo(this.state)
            .then(()=> {
                this.setState({text: ''})
            })
            .catch(err => {
                alert('Something went wrong!!!')
            })
    }

    render() {
        let { todos } = this.props;
        return (
            <div>
                <h1>React Redux Firebase</h1>
                {/* Craete Todo Form */}
                <form>
                    <input name="text" type="text" value={ this.state.text } onChange={ this.inputOnChange } />
                    <button onClick={ this.createTodo }>Add</button>
                </form>
                { todos.length > 0 && <div className="todos">
                    {todos.map(todo => <div className="todo-item" key={todo.id}>{ todo.text }</div>)}
                </div> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps, {getTodos, createTodo })(App)
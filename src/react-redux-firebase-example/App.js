import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTodos } from './actions'
class App extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getTodos()
    }

    render() {
        let { todos } = this.props;
        return (
            <div>
                <h1>React Redux Firebase</h1>
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


export default connect(mapStateToProps, {getTodos})(App)
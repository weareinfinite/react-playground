import React from 'react';
import { render } from 'react-dom';

import { database } from '../shared/firebase';
import { mapObject} from '../shared/utls';

console.log()

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
    
    render() {

        let { todos } = this.state;

        return (
            <div>
                <h1>Sample  App</h1>
                    <div className="todos">
                        { todos.map((td) => <div key={td.id}>{td.text}</div>) }
                    </div>
            </div>
        )

    }
}

render(<App/>, document.getElementById('app'))
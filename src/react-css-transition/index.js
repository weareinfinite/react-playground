import React from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './index.css';


class Page extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: ["Hello","World","Foo"]
        }
    }

    items() {
        return this.state.items.map((i,k)=> <div className="item" key={k}>{i} <button onClick={() => this.removeItem(k)}>&times;</button></div>)
    }

    addItem() {

        const text = prompt('Enter data: ');
        let items = this.state.items;
        //items.unshift(text);
        items.push(text);
        this.setState({items: items});
        
    }

    removeItem(key) {
        let items = this.state.items;
        items.splice(key, 1);

        this.setState({ items})
    }


    render() {
        return(
            <div>
                <button className="btn-add" onClick={() => { this.addItem() }}
                     > Add 
                </button>
                <ReactCSSTransitionGroup 
                transitionName="awesome"
                transitionEnterTimeout={2000}
                transitionLeaveTimeout={1000}
                >
                    
                        
                        {
                           this.items()
                        }
                </ReactCSSTransitionGroup>
            </div>
           
        )
    }
}


const App = () => (
    <div className="container">

        <h1>React Animation Example App</h1>
        <Page/>
    </div>
)

render(<App/>, document.getElementById('app'))
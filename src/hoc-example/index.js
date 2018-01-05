import React, { Component } from 'react';
import { render } from 'react-dom';

const Hoc = (ComposedComponent) => {
    return class  extends Component{

    constructor(props) {
        super(props)

        this.state = {
            count:0
        }

    }

    componentWillMount() {

        console.count('Yep')
    }

    incrementCount() {

        console.log('INCREMENT')

        this.setState({ count: this.state.count+1 });
    }

    render() {
        return <ComposedComponent {...this.props} {...this.state} update={ this.incrementCount.bind(this) }></ComposedComponent>
    }

}
}

/** Normal Components  */
const Button = (props) => (<button onClick={  props.update }>{ props.children } <span>{ props.count }</span></button>)

const Label = (props) => (<label onMouseOver={  props.update }>{ props.children } <span>{ props.count }</span></label>)

/** Composite Component  */

const AwesomeButton = Hoc(Button)

const AwesomeLabel = Hoc(Label)

const App = () => (
    <div>
        <h2>HOC Example</h2>
        <div className="group">
        <h3>Normal Component</h3>
            <Button>Hello</Button>
            <Label>World</Label>
        </div>
        <div className="group">
        <h3>Composite Component</h3>
            <AwesomeButton>Awesome Button</AwesomeButton>
            <AwesomeLabel>Awesome Label</AwesomeLabel>
        </div>
        
    </div>
)
render(<App/>, document.getElementById('app'))
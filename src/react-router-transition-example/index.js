import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter, Route, Link , Switch } from 'react-router-dom';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// Pages
import Home from './pages/home';
import About from './pages/about';

const TransitionedPage = (WrappedComponent) => {
    const TransitionedComponent = (props) => (
        <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionAppearTimeout={600}
                    transitionEnterTimeout={600}
                    transitionLeaveTimeout={200}
                    transitionName="slide">
                    <WrappedComponent {...props} />
        </ReactCSSTransitionGroup>
    );
    return TransitionedComponent;
};



const App = () => (
    <div>
        <BrowserRouter>
        <div>
                <nav>
                     <Link to="/" >Home</Link>
                     <Link to="/about" >About</Link>
                </nav>
               

                    
                <Route path="/" exact component={ TransitionedPage(Home) } />
                <Route path="/about" component={ TransitionedPage(About) } />
                

        </div>
           
            
        </BrowserRouter>
    </div>
)

render(<App/>, document.getElementById('app'))
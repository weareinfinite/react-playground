import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Topics from './pages/topics';
import SingleTopic from './pages/single-topic';


const App = () => (
    <div>
        <Router>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/topics" >Topics</Link>
                <Route path="/" exact component={ Home } />
                <Route path="/about" exact component={ About } />
                <Route path="/topics" component={ Topics } />
                <Route path="/topics/:name" component={ SingleTopic } />
            </div>
        </Router>
    </div>
)

export default App;

import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';


const App = () => (
    <div>
        <Router>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Route path="/" exact component={ Home } />
                <Route path="/about" exact component={ About } />
            </div>
        </Router>
    </div>
)

export default App;

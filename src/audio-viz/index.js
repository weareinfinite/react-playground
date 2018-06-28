import React from 'react';
import { render } from 'react-dom';

import Song from './components/Song';


const App = () => (
    <div>
        <h1>Sample App</h1>
        <Song/>
    </div>
)

render(<App/>, document.getElementById('app'))
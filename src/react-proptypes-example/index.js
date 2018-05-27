import React from 'react';
import { render } from 'react-dom';

import Hello from './hello';

const App = () => (
    <div>
        <h1>Prop Types</h1>
        <Hello name="Sarath" />
        <Hello/>
    </div>
)

render(<App/>, document.getElementById('app'))
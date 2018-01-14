import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Counter from './Counter';

const App = () => (
    <Provider store={ store }>
        <div>
            <h1>React Redux Action Creators Example</h1>
            <Counter/>
        </div>
    </Provider>
)

render(<App/>, document.getElementById('app'))
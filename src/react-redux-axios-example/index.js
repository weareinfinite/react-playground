import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Counter from './Counter';
import GithubProfile from './GithubProfile';

const App = () => (
    <Provider store={ store }>
        <div>
            <h1>React Redux Axios Example</h1>
            <Counter/>
            <GithubProfile username="saratonite"/>

        </div>
    </Provider>
)

render(<App/>, document.getElementById('app'))
import React from 'react';
import { render } from 'react-dom';

import Link from './lib/components/Link';

const App = () => (
    <div>
        <h1>Sample App</h1>
        <Link page="http://sarath.tk">Sarath.tk</Link>

    </div>
)

render(<App/>, document.getElementById('app'))
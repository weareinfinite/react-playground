import React from 'react';
import { render } from 'react-dom';
import  { Provider } from 'react-redux';
import store from './store';

import ContactForm from './contact-form';

const App = () => (
    <div>
        <h1>Sample App</h1>
        <ContactForm onSubmit={(e) => {
            console.log(e)
        }}/>
    </div>
)

render(<Provider store={ store }><App/></Provider>, document.getElementById('app'))
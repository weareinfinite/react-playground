import React from 'react';
import { Link } from 'react-router-dom';

const Topics = () => (
    <div>
    <h1>Topics Page</h1>
    <Link to="/topics/react-redux">React Redux</Link>
    <Link to="/topics/react-router">React Router</Link>
    <Link to="/topics/axios">Axios</Link>
    </div>
)

export default Topics;
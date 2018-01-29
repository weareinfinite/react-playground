import React from 'react';
import { Link, Route } from 'react-router-dom';
import ProfileEdit  from './profile-edit';


const Profle = ({match}) => console.log(match) || (
    <div>
        <h1>Profle Page</h1>
        <Link to={`${match.url}/edit`}>Edit </Link>
        <Route exact path={`${match.url}/edit`} component={ ProfileEdit }></Route>
    </div>
)

export default Profle;
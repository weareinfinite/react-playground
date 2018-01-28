import React from 'react';

const SingleTopic = ({ match })  => console.log(match) || (
    <h1>{ match.params.name} Page</h1>
)

export default SingleTopic;
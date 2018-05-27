import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({ name }) => (
    <h1>Hello {name}</h1>
)

Hello.propTypes = {
    name: PropTypes.string.isRequired
}

Hello.defaultProps = {
    name : 'World'
}

export default Hello;
import React, { Component } from 'react';
import { render } from 'react-dom';

import Modal from './modal';


export default class App extends Component {

    constructor(props) {

        super(props);

        this.state = { showModal : false };

        this.clickShowModal = this.clickShowModal.bind(this);

        this.handleModalClose = this.handleModalClose.bind(this);

    }

    clickShowModal() {
        this.setState({showModal: true})
    }

    handleModalClose() {
        this.setState({ showModal: false });
    }
    render() {
        const { showModal } = this.state;
        return (
            <div>
                <Modal show={ showModal } handleClose={ this.handleModalClose }/>
                <button onClick={this.clickShowModal} >Show Modal</button>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'))
import React, { Component } from 'react';
import './modal.css';
export default class Modal extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {

        const { show } = this.props;

        if(!show) return(<span></span>)

        return (
            <div className="modal-overlay" >
              <div className="modal">
                <h1>This is the modal</h1>
                <button onClick={ this.props.handleClose }>Close </button>
              </div>
            </div>
        );
    }
}
import React, { Component } from 'react';
import './modal.css';

import posed from 'react-pose';
console.log(posed)

const ModalBox = posed.div({
    off: { scale: .5, x: 0, opacity: .5 },
    on: { scale: 1, x: '5%', opacity: 1 }
});
export default class Modal extends Component {

    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {

        const { show } = this.props;

        

        return (
            <div className={show ? 'modal-overlay active' : 'modal-overlay'}>
              <ModalBox className="modal" pose={show ? "on" : "off"}>
                <h1>This is the modal</h1>
                <button onClick={ this.props.handleClose }>Close </button>
              </ModalBox>
            </div>
        );
    }
}
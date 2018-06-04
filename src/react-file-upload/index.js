import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import {  storage } from '../shared/firebase';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { selectedFile: null }
        this.fileselectHandler = this.fileselectHandler.bind(this);
        this.uploadHandler = this.uploadHandler.bind(this);


    }

    fileselectHandler(e) {

        console.log('File ', e.target.files);

        this.setState({ selectedFile: e.target.files[0]})

    }

    uploadHandler(e) {

        console.log(this.state.selectedFile)


        let uploadRef = storage.ref(`playground_uploads/${this.state.selectedFile.name}`);
        let uploadTask = uploadRef.put(this.state.selectedFile);
        uploadTask.on('state_changed', (e) => {
            console.log(e)
        })

    }

    render() {
        return(
            <div>
                <h1>React File Upload App</h1>
                <input type="file" name="thefile" onChange={ this.fileselectHandler } />
                <button onClick={ this.uploadHandler }>Upload</button>
            </div>
        )
    }
}
render(<App/>, document.getElementById('app'))
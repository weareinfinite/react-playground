import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';

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

        let fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);

        axios.post('/upload', fd)
            .then(res => console.log('File uploaded'))
            .catch(err => console.log('ERROR -> ', err));

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
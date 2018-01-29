import React from 'react';
import { connect } from 'react-redux';
import { getProfile } from './actions';

class GithubProfile extends React.Component {


    constructor(props) {
        super(props)
    }

    componentWillMount() {


        this.props.getProfile(this.props.username);


    }

    render() {

        var { user } = this.props;

        return(<div>
            <h1>Profile</h1>
            { user && <div>
                <p>Name : {user.name} </p>
                <p>Bio : {user.bio} </p>
                </div>}
        </div>)
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getProfile })(GithubProfile)
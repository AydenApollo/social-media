import React, { Component } from 'react';
import { connect } from 'react-redux';

class Authenticate extends Component {
    render() {
        return (
            <div>
                Log in here for a good time
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

var ConnectedAuth = connect(mapStateToProps)(Authenticate);
export default ConnectedAuth
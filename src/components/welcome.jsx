import React, { Component } from 'react';
import { connect } from 'react-redux';

class Welcome extends Component {
    render() {
        return (
            <div>
                Welcome to LOOK@ME
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

var ConnectedWelcome = connect(mapStateToProps)(Welcome);
export default ConnectedWelcome
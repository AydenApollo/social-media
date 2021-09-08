import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

class SignUp extends Component {
    render() {
        return (
            <div>
                <Button>Signup</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

var ConnectedSignUp = connect(mapStateToProps)(SignUp);
export default ConnectedSignUp
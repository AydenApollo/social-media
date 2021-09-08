import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

class Login extends Component {
    render() {
        return (
            <div>
                <Button>Login</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

var ConnectedLog = connect(mapStateToProps)(Login);
export default ConnectedLog
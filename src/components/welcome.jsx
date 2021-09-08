import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './logButton';
import SignUp from './signupButton';

import TextField from '@material-ui/core/TextField';

class Welcome extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <div>
                <div>
                Welcome to LOOK@ME
                </div>
                <TextField id="standard-basic" label="Email"/>
                <TextField id="standard-basic" label="Password"/>
                <TextField id="standard-basic" label="Confirm Password"/>
                <TextField id="standard-basic" label="Username"/>
                <div>
                    <SignUp/>
                </div>

            </div>
            </form>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

var ConnectedWelcome = connect(mapStateToProps)(Welcome);
export default ConnectedWelcome
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import SignUp from './signupButton';
import Image from '../assets/phone.jpg'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

class Welcome extends Component {
    render() {
        return (
            <Paper style={styles.paperContainer}>
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
                <div>
                    Already Have an Account? Login<Button component={Link} to='/Login'>Here</Button>
                </div>
                </div>
            </form>
                </Paper>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

var ConnectedWelcome = connect(mapStateToProps)(Welcome);
export default ConnectedWelcome
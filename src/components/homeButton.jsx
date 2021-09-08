import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
        return (
            <div>
                <Button>Home</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

var ConnectedHome = connect(mapStateToProps)(Home);
export default ConnectedHome
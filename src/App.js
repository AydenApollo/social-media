import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import Welcome from './components/welcome';
import Authenticate from './components/auth';

function App() {
  return (
    <Provider>
      <BrowserRouter>
      <AppBar position="relative">
        <Toolbar>
          <Box display="flex" width={100} alignItems="center">
            <h5>LOOK@ME</h5>
          </Box>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/authenticate" component={Authenticate}/>
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import Welcome from './components/welcome';
import Login from './components/logButton';
import Home from './components/homeButton';
import SignUp from './components/signupButton';
import store from './dispatch/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <AppBar position="relative">
        <Toolbar>
          <Box display="flex" width={100} alignItems="center">
            <h4>LOOK@ME</h4>
          </Box>
          <Box>
            <Login/>
          </Box>
          <Box>
            <Home/>
          </Box>
          <Box>
            <Button component={Link} to='/'>SignUp</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={Welcome}/>
      </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

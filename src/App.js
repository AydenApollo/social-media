import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import Welcome from './components/welcome';
import Login from './components/logButton';
import Home from './components/homeButton';
import store from './dispatch/store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <AppBar position="relative">
        <Toolbar>
          <Box display="flex" width={100} alignItems="center">
            <h5>LOOK@ME</h5>
          </Box>
          <Box>
            <Login/>
          </Box>
          <Box>
            <Home/>
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

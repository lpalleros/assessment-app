import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Assessment from '../screen/Assessment/Assessment';
import Start from '../screen/Start/Start';
import Dashboard from '../screen/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start/>
        </Route>
        <Route exact path="/assessment">
          <Assessment/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

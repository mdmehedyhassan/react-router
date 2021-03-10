import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/teamDetail/:id">
            <TeamDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetail from './components/TeamDetail/TeamDetail';
import Error from './components/Error/Error';

function App() {
  return (
    <div >
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
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

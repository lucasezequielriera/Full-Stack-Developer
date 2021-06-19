import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './assets/css/App.css';
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Switch>
        </Router>
    </div>
  );
}

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import RegisterForm from './pages/Register/RegisterForm';
import LoginForm from './pages/Login/LoginForm';
import Inicio from './pages/Inicio/Inicio';
import DetalleProductos from './pages/DetalleProductos/DetalleProductos';

export default function App() {
  return (
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/'><Inicio /></Route>
            <Route exact path='/Login'><LoginForm /></Route>
            <Route exact path='/Registrate'><RegisterForm /></Route>
            <Route exact path='/:id'><DetalleProductos /></Route>
          </Switch>
        </Router>
  );
}

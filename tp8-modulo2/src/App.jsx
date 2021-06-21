import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/App.css';
import Navbar from './components/Navbar';
import RegisterForm from './Pages/Register/RegisterForm';
import LoginForm from './Pages/Login/LoginForm';
import Inicio from './Pages/Inicio/Inicio';
import DetalleProductos from './Pages/DetalleProductos/DetalleProductos';

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

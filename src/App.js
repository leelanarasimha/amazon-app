import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className='container'>
        <Switch>
        <Route path='/' render={ ()=> <div><h2>Welcome To Amazon</h2></div>} exact/>
      <Route path='/login' component={Login}/>
      <Route path='/registration' component={Registration}/>
      <Route path='/products' component={Products}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/cart' component={Cart}/>
      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

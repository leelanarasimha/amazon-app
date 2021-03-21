import { Link } from 'react-router-dom';
import './Header.css';
export default function Header(props){
    return(
        <div>
            <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Amazon</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link nav-component" aria-current="page" to="/login">Login</Link>
        <Link class="nav-link nav-component" aria-current="page" to="/registration">Registration</Link>
        <Link class="nav-link nav-component" aria-current="page" to="/products">Products</Link>  
        <Link class="nav-link nav-component" aria-current="page" to="/contact">Contact</Link>
      <Link class="nav-link nav-component cart" aria-current="page" to="/cart">Cart</Link>
      </div>
      </div>
    </div>
</nav>
        </div>
    )
}
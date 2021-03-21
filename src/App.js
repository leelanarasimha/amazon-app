import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
function App() {
  return (
    
    <div>
<Header></Header>


<div class="d-flex h-50 mt-5">
  
  <div class="m-auto">
    <form method="post" action="">
      <div class="form-group">
        <h2 class="login-header ">Login</h2>
      </div>
      <div class="form-group">
        <input type="text" name="username" placeholder="Username" class="username-input"/>
      </div>
      <div class="form-group">
        <input type="password" name="password" placeholder="Password" class="password-input"/>
      </div>
      <div class="form-group">
        <input type="checkbox" name="remember"/><span>Remember Me Next Time</span>
      </div>
      <div class="form-group">
        <input type="submit" name="login-button" value="GO" class="submit-button"/>
      </div>
    </form>
  </div>


    </div>
    </div>
  );
}

export default App;

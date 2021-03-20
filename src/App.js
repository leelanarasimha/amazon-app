import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
function App() {
  return (
    
    <div>
<Header></Header>
<form>
  <div class="form-group " class="w-25 p-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control form-control-sm "  id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group" class="w-25 p-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control form-control-sm"  id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check" class="w-25 p-3">
    <input type="checkbox"  class="w-30" class="form-check-input"  id="exampleCheck1"/>
    <label class="form-check-label" class="w-50 p-10" for="exampleCheck1">Check me out</label>
  </div>
  
  <div class="form-group form-check" class="w-25 p-3">
  <button type="submit" class="w-25 p-10" class="btn btn-primary">Submit</button>
  </div>
</form>


    </div>
  );
}

export default App;

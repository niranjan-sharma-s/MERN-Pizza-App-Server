import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap'
import Navbar from "./Components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import Cartscreen from "./screens/Cartscreen";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen";
import OrdersScreen from "./screens/OrdersScreen";
import Adminscreen from "./screens/Adminscreen";


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Route path="/" exact component={Homescreen }/>
      <Route path="/cart"  component={Cartscreen} />
      <Route path="/login" component={Loginscreen}/>
      <Route path="/register" component={Registerscreen}/>
      <Route path="/orders" component={OrdersScreen}/>
      <Route path="/admin" component={Adminscreen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

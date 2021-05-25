import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Products from './views/Products';
import ProductDetails from './views/ProductDetails';



function App() {
  return (
    <BrowserRouter>
      <Navbar />

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/productdetails/:id" component={ProductDetails}/>
    </Switch>




    </BrowserRouter>
  );
}

export default App;


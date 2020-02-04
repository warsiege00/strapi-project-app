import React, { Component } from 'react';
import ProductList from './components/ProductList';
import { Route, Switch } from "react-router";
import {Link} from 'react-router-dom';
import Product from './components/Product';


const Header = () => {
  return (
    <header className="App-header">
      <Link to="/"><h1> Exotic Fish Supplies</h1></Link>
      <div className="right">
        <button className="snipcart-checkout snipcart-summary">
          Checkout (<span className="snipcart-total-items"></span>)
      </button>
      </div>
    </header>
  );
}

const Footer = () => {
  return (
    <header className="App-header">
      <Link to="/"><h1> Exotic Fish Supplies</h1></Link>
      <div className="right">
        <button className="snipcart-checkout snipcart-summary">
          Checkout (<span className="snipcart-total-items"></span>)
      </button>
      </div>
    </header>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:id" component={Product} />
          </Switch>
        </main>
        <Footer />
      </div >
    );
  }
}
export default App;

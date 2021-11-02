import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

//Screens
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import BRMcalculator from "./screens/BRMcalculator";

import CartScreen from "./screens/CartScreen";
import Prices from "./screens/Prices";
import Delivery from "./screens/Delivery";
import Payments from "./screens/Payments";
import AboutScreen from "./screens/AboutScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/calculator" component={BRMcalculator} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/about" component={AboutScreen} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

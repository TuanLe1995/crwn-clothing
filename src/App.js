import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
// Switch: the moment it finds the matched path, its not gonna render any paths below the path.
// Route receives three arguments : exact(boolean) path(string) component(JSX)
// The component properties of Route is gonna get passed three arguments: history, location, and match
function App() {
  return (
    <div className="">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

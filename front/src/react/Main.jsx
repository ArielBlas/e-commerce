import React from "react";
import { Route, Switch } from "react-router";

import SingleProductContainer from "./singleProduct/SingleProductContainer";
import AllProductsContainer from "./allProducts/AllProductsContainer";
import NavbarContainer from "./navbar/NavbarContainer";
import HomeContainer from "./home/HomeContainer";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  return (
    <div>
      <NavbarContainer />
      <Switch>
        {/* <Route path="/" render={() => console.log("hola")} /> */}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/productos" component={AllProductsContainer} />
        {/*  <Route exact path="/search" component={AllProductsContainer} /> */}
        <Route exact path="/productos/:id" component={SingleProductContainer} />
      </Switch>
    </div>
  );
};

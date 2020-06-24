import React from "react";
import { Route, Switch } from "react-router";
import LoginContainer from "./login/LoginContainer"
import RegisterContainer from "./register/RegisterContainer"

import SingleProductContainer from "./singleProduct/SingleProductContainer";
import AllProductsContainer from "./allProducts/AllProductsContainer";
import NavbarContainer from './navbar/NavbarContainer';
import HomeContainer from './home/HomeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


export default () => {
  return (
    <div>
      <NavbarContainer />
      <Switch>
        
        
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/register" component={RegisterContainer}/>

        {/* <Route path="/" render={() => console.log("hola")} /> */}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/productos" component={AllProductsContainer} />
        <Route exact path="/acceder" component={LoginContainer} />
        <Route exact path="/registro" component={RegisterContainer} />
        {/*  <Route exact path="/search" component={AllProductsContainer} /> */}
        <Route exact path="/productos/:id" component={SingleProductContainer} />
      </Switch>
    </div>
  );
};

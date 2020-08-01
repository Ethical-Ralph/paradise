import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Competitions from "./pages/Competitons";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import CompetitionsDetails from "./components/CompetitonDetails";
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./pages/Cart";
import { connect } from "react-redux";
import LiveDrawList from "./components/LiveDrawList";
import LiveDraw from "./pages/LiveDrawVideo";
import "./assets/dist/css/bootstrap.css";
import { fetchCart } from "./Redux/cart/cartActions";

function App({ isLoggedIn, fetchCart }) {
  useEffect(() => {
    if (isLoggedIn) {
      fetchCart();
    }
  }, [isLoggedIn]);
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/competitions" component={Competitions} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/competitions/:id" component={CompetitionsDetails} />
          <PrivateRoute exact path="/cart" component={Cart} />
          <Route exact path="/live-draw/" component={LiveDrawList} />
          <Route exact path="/live-draw/:id" component={LiveDraw} />
        </Switch>
      </Layout>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
};

const mapDispatchToProps = {
  fetchCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

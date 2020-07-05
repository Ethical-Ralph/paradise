import React from 'react';
import { Switch, Route } from "react-router-dom"
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/main.css'
import Competitions from './pages/Competitons';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';


function App () {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/competitions" component={Competitions} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;

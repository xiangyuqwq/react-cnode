import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Api from "./components/Api";
import Regist from "./components/Regist";
import Login from "./components/Login";
import Abouts from "./components/Abouts";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import history from "./history";
import "./App.css";

export default function App() {
  return (
    <Router history={history}>
      <Nav />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/api" component={Api} />
            <Route path="/regist" component={Regist} />
            <Route path="/about" component={Abouts} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

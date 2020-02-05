import React from "react";
import { Switch, Route, HashRouter as Router, } from "react-router-dom";
import Api from "./components/nav/Api";
import GetStart from "./components/nav/GetStart";
import Login from "./components/nav/Login";
import Abouts from "./components/nav/Abouts";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import Topic from "./components/Topic";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Nav />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/tab/:type" component={HomePage} />
            <Route path="/api" component={Api} />
            <Route path="/getstart" component={GetStart} />
            <Route path="/about" component={Abouts} />
            <Route path="/login" component={Login} />
            <Route path="/topic/:id" component={Topic} />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

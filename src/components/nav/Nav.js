import React from "react";
import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="navbar" style={{width: "90%"}}>
        <div className="logo">
          <img src={require("../../assets/img/logo.png")} alt="logo" />
        </div>
        <ul className="navcontain nav" style={{float: 'right'}}>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/getstart">新手入门</Link>
          </li>
          <li>
            <Link to="/api">API</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
          <li>
            <Link to="/login">登录</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

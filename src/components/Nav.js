import React from "react";
import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <div className="Nav">
      <div className="navbar">
        <div className="logo">
          <img src={require("../assets/img/logo.png")} alt="logo" />
        </div>
        <ul className="navcontain">
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="api">API</Link>
          </li>
          <li>
            <Link to="about">关于</Link>
          </li>
          <li>
            <Link to="regist">注册</Link>
          </li>
          <li>
            <Link to="login">登录</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
// import "./sider.css";

export default function Sidebar() {
  return (
    <div className="sider">
      <div className="panel">
        <div className="inner">
          <p>CNode: Node.js专业中文社区</p>
          <div>
            您可以
            <Link to="/login">登录</Link>或<Link to="/regist">注册</Link>
            也可以
            <Link to="/login" className="span-info" style={{color: '#fff'}}>
              通过 GitHub 登录
            </Link>
          </div>
        </div>
      </div>
      <div className="panel">
        <div className="header">
          <span className="col-fade">无人回复的话题</span>
        </div>
        <div className="inner">
          libuv线程池和主线程通信原理 <br />
          2020 年为什么要学TypeScript？
          <br />
          实现哈希算法和哈希表
          <br />
          使用nodejs爬取了1000w的职位信息，开发了一个职位搜索网站
          <br />
        </div>
      </div>
      <div className="panel">
        <div className="header">
          <span className="col-fade">积分榜 Top 100 >></span>
        </div>
        <div className="inner">
          21910 i5ting <br />
          15705 alsotang <br />
          9455 atian25 <br />
          9350 leapon <br />
          8780 jiyinyiyong
          <br />
          7480 yakczh <br />
          6855 im-here <br />
          6115 DevinXian <br />
          5815 chapgaga <br />
          5360 magicdawn
        </div>
      </div>

      <div className="panel">
        <div className="header">
          <span className="col-fade">友情社区</span>
        </div>
        <div className="inner">
          <ol className="friendship-community">
            <li>
              <a
                href="https://ruby-china.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://static2.cnodejs.org/public/images/ruby-china-20150529.png"
                  alt="Ruby China"
                />
              </a>
            </li>
            <div className="sep10"></div>
            <li>
              <a
                href="http://golangtc.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://static2.cnodejs.org/public/images/golangtc-logo.png"
                  alt="Golang 中国"
                />
              </a>
            </li>
            <div className="sep10"></div>
            <li>
              <a
                href="http://phphub.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://static2.cnodejs.org/public/images/phphub-logo.png"
                  alt="Laravel 社区"
                />
              </a>
            </li>
            <div className="sep10"></div>
            <li>
              <a
                href="https://testerhome.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"
                  alt="中国测试技术社区"
                />
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div className="panel">
        <div className="header">
          <span className="col-fade">客户端二维码</span>
        </div>
        <div className="inner cnode-app-download">
          <img
            width="200"
            src="//dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU"
            alt="qrcode"
          />
          <br />
          <a
            href="https://github.com/soliury/noder-react-native"
            target="_blank"
            rel="noopener noreferrer"
          >
            客户端源码地址
          </a>
        </div>
      </div>
    </div>
  );
}

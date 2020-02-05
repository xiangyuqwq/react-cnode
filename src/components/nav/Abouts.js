import React from "react";
import { Link } from "react-router-dom";

export default function Abouts() {
  return (
    <div className="panel">
      <div className="header">
        <ul className="breadcrumb">
          <li>
            <Link to="/">主页</Link>
            <span className="divider">/</span>
          </li>
          <li className="active">关于</li>
        </ul>
      </div>
      <div className="inner topic">
        <div className="topic-content">
          <div className="markdown-text">
            <h3>关于</h3>
            <p>
              CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于
              Node.js 的技术研究。
            </p>
            <p>
              CNode 社区由一批热爱 Node.js
              技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对
              Node.js 感兴趣的朋友。
            </p>
            <p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
            <p>
              社区目前由{" "}
              <a href="http://cnodejs.org/user/alsotang">
                @alsotang
              </a>{" "}
              在维护，有问题请联系：
              <a href="https://github.com/alsotang">
                https://github.com/alsotang
              </a>
            </p>
            <p>
              请关注我们的官方微博：
              <a href="http://weibo.com/cnodejs">
                http://weibo.com/cnodejs
              </a>
            </p>
            <h3>移动客户端</h3>
            <p>
              客户端由{" "}
              <a href="https://cnodejs.org/user/soliury">
                @soliury
              </a>{" "}
              开发维护。
            </p>
            <p>
              源码地址：{" "}
              <a
                href="https://github.com/soliury/noder-react-native"
              
              >
                https://github.com/soliury/noder-react-native
              </a>{" "}
              。
            </p>
            <p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
            <p>
              另，安卓用户同时可选择：
              <a
                href="https://github.com/TakWolf/CNode-Material-Design"
              
              >
                https://github.com/TakWolf/CNode-Material-Design
              </a>{" "}
              ，这是 Java 原生开发的安卓客户端。
            </p>
          </div>

          <div className="about-friend-links">
            <h3>友情链接</h3>

            <a href="https://www.huoban.com/">
              <img alt="1" src="//dn-cnode.qbox.me/Ftmw28ed0I_rir7YYz3c_jVPkCGx" />
            </a>

            <a href="http://100offer.com/">
              <img alt="1" src="//dn-cnode.qbox.me/FmU1Ik57z6wrl9JDTNdcYBTDetFq" />
            </a>

            <a href="https://www.teambition.com/">
              <img alt="1" src="//dn-cnode.qbox.me/FkMR_SqpCp4Q0eDIaWrQlALiXdmP" />
            </a>

            <a href="http://yunzhihui.com/">
              <img alt="1" src="//dn-cnode.qbox.me/Fq2cV_14IFHwelZ-6jey42Z0-eOR" />
            </a>
          </div>
          <div className="">
            <h3>LOGO</h3>
            <p>
              白底：{" "}
              <a href="/public/images/cnodejs.svg">
                /public/images/cnodejs.svg
              </a>
            </p>
            <p>
              黑底：{" "}
              <a href="/public/images/cnodejs_light.svg">
                /public/images/cnodejs_light.svg
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

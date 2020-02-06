import React from 'react';
import './footer.css'

export default function footer() {
  
  return (
    <div id="footer">
    <div id="footer_main">
      <div className="links">
        <a className="dark" href="/rss">RSS</a>
        |
        <a className="dark" href="https://github.com/cnodejs/nodeclub/"
          >源码地址</a
        >
      </div>
      <div className="col_fade">
        <p>
          CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
          的技术研究。
        </p>
        <p>
          服务器赞助商为
          <a
            href="http://www.ucloud.cn/?utm_source=zanzhu&amp;utm_campaign=cnodejs&amp;utm_medium=display&amp;utm_content=yejiao&amp;ytag=cnodejs_logo"
            className="sponsor_outlink"
          >
            <img
              src="https://static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9"
              title="ucloud"
              alt="ucloud"
              width="92px"
            />
          </a>
          ，存储赞助商为
          <a
            href="http://www.qiniu.com/?ref=cnode"
            className="sponsor_outlink"
          >
            <img
              src="https://static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX"
              title="七牛云存储"
              alt="七牛云存储"
              width="115px"
            />
          </a>
          ，由<a
            href="https://www.aliyun.com/product/nodejs?ref=cnode"
            className="sponsor_outlink"
          >
            <img
              src="https://static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD"
              title="alinode"
              alt="alinode"
              height="54px"
              width="166px"
            /> </a
          >提供应用性能服务。
        </p>
        <p>
          新手搭建 Node.js 服务器，推荐使用无需备案的
          <a href="https://www.digitalocean.com/?refcode=eba02656eeb3"
            >DigitalOcean(https://www.digitalocean.com/)</a
          >
        </p>
      </div>
    </div>
  </div>
  )
}
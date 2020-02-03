import React from 'react';
import { Link } from 'react-router-dom';

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
        </div>
      </div>
    </div>
  );
};
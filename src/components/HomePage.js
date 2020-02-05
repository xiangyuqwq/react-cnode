import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import "./homepage.css";

function TopicHeader() {
  var [tab, setTab] = useState({})
  return (
    <div className="header">
      <Link
        to="/"
        className={tab === "all" ? "topic-tab current-tab" : "topic-tab"}
      >
        全部
      </Link>
      <Link
        to="/tab/good"
        className={tab === "good" ? "topic-tab current-tab" : "topic-tab"}
      >
        精华
      </Link>
      <Link
        to="/"
        className={tab === "share" ? "topic-tab current-tab" : "topic-tab"}
      >
        分享
      </Link>
      <Link
        to="/"
        className={tab === "ask" ? "topic-tab current-tab" : "topic-tab"}
      >
        问答
      </Link>
      <Link
        to="/"
        className={tab === "job" ? "topic-tab current-tab" : "topic-tab"}
      >
        招聘
      </Link>
    </div>
  );
}

function TopicItem({ item }) {
  return (
    <div className="cell">
      <div className="user-avatar pull-left">
        <img src={item.author.avatar_url} alt={item.author.loginname} />
      </div>
      <div className="reply-count pull-left">
        <span className="count-of-replies">{item.reply_count}</span>
        <span className="count-sperator">/</span>
        <span className="count-of-visits">{item.visit_count}</span>
      </div>
      <div className="last-time pull-right">
        <img
          className="user-small-avatar"
          src={item.author.avatar_url}
          alt={item.author.loginname}
        />
      </div>
      <div className="topic-title-wrapper">
        <Link className="topic-title" to={"/topic/" + item.id}>
          {item.title}
        </Link>
      </div>
    </div>
  );
}

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    api.get("/topics").then(res => {
      console.log(res.data.data);
      this.setState({
        list: res.data.data
      });
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="panel">
        <TopicHeader />
        <div className="inner no-padding">
          <div className="topic_list">
            {this.state.list.map(item => {
              return <TopicItem key={item.id} item={item} />;
            })}
          </div>
          {/* <div className="pagination" current_page="1">
            <ul>
              <li className="disabled"></li>
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}

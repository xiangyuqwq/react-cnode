import React from "react";
import { Link } from "react-router-dom";
import api from "../api";
import "./homepage.css";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    api.get("/topics").then(res => {
      console.log(res.data);
      this.setState({
        list: res.data.data
      });
    });
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="panel">
        <div className="header">
          <ul>
            <li>
              <Link to="/">全部</Link>
            </li>
            <li>
              <Link to="/">精华</Link>
            </li>
            <li>
              <Link to="/">分享</Link>
            </li>
            <li>
              <Link to="/">问答</Link>
            </li>
            <li>
              <Link to="/">招聘</Link>
            </li>
          </ul>
        </div>
        <div className="inner no-padding">
          <div className="topic_list">
            {this.state.list.map((item, index) => {
              return (
                <div className="cell" key={index}>
                  <div className="user-avatar pull-left">
                    <img
                      src={item.author.avatar_url}
                      alt={item.author.loginname}
                    />
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
                    ></img>
                  </div>
                  <div className="topic-title-wrapper">
                    <Link className="topic-title" to={"/topic/" + item.id}>
                      {item.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination" current_page="1">
            <ul>
              <li className="disabled"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import TopicHeader from "./TopicHeader";
// import "./homepage.css";


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
        <span className={(item.top || item.good) ? 'tag put-top': ' tag tab-common' }>{tabDomType(item)}</span>
        <Link className="topic-title" to={"/topic/" + item.id}>
          {item.title}
        </Link>
      </div>
    </div>
  );
}

function tabDomType(item) {
    var tabs = {
      'share': '分享',
      'ask': '问答',
      'job': '招聘',
    }
    if (item.top) {
      return "置顶";
    } else if (item.good) {
      return "精品";
    } else {
      return tabs[item.tab];
    }
}
 
export default function HomePage(props) {
  var [tabType, setTabType] = useState("");
  var [list, setList] = useState([]);

  useEffect(() => {
    const type = props.match.params.type;
    setTabType(type);
    // console.log(type)
    if (type) {
      api.get(`/topics?tab=${type}`).then(res => {
          setList(res.data.data);
      });
    }else {
      api.get(`/topics?tab=all`).then(res => {
        setList(res.data.data);
    });
    }
  }, [props, tabType]);

  return (
    <div className="panel">
      <TopicHeader />
      <div className="inner no-padding">
        <div className="topic_list">
          <Suspense fallback={<div>loading...</div>}>
            {list.map(item => {
              console.log(item)
              return <TopicItem key={item.id} item={item} />;
            })}
          </Suspense>
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

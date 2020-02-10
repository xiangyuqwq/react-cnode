import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import "./homepage.css";
import "antd/dist/antd.css";
import history from "../../history";
import { Pagination } from "antd";

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
        <span
          className={item.top || item.good ? "tag put-top" : " tag tab-common"}
        >
          {tabDomType(item)}
        </span>
        <Link className="topic-title" to={"/topic/" + item.id}>
          {item.title}
        </Link>
      </div>
    </div>
  );
}

function tabDomType(item) {
  var tabs = {
    share: "分享",
    ask: "问答",
    job: "招聘"
  };
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
  var [page, setPage] = useState(1);

  useEffect(() => {
    const type = props.match.params.type;
    // console.log(type)
    api.get(`/topics?tab=${type}&page=${page}`).then(res => {
      setList(res.data.data);
    });
  }, [props, page]);

  function onChange(pageNumber) {
    const type = props.match.params.type;
    setPage(pageNumber);
    if (type) {
      history.push({
        pathname: `/tab/${type}/${pageNumber}`
      });
    } else {
      history.push({
        pathname: `/tab/all/${pageNumber}`
      });
    }
  }


  return (
    <div className="panel">
      <div className="header">
        <Link
          to="/tab/all"
          className={
            tabType === "all" || "" ? "topic-tab current-tab" : "topic-tab"
          }
          onClick={() => {
            setTabType("all");
            setPage(1);
          }}
        >
          全部
        </Link>
        <Link
          to="/tab/good"
          className={tabType === "good" ? "topic-tab current-tab" : "topic-tab"}
          onClick={() => {
            setTabType("good");
            setPage(1);
          }}
        >
          精华
        </Link>
        <Link
          to="/tab/share"
          className={
            tabType === "share" ? "topic-tab current-tab" : "topic-tab"
          }
          onClick={() => {
            setTabType("share");
            setPage(1);
          }}
        >
          分享
        </Link>
        <Link
          to="/tab/ask"
          className={tabType === "ask" ? "topic-tab current-tab" : "topic-tab"}
          onClick={() => {
            setTabType("ask");
            setPage(1);
          }}
        >
          问答
        </Link>
        <Link
          to="/tab/job"
          className={tabType === "job" ? "topic-tab current-tab" : "topic-tab"}
          onClick={() => {
            setTabType("job");
            setPage(1);
          }}
        >
          招聘
        </Link>
      </div>
      <div className="inner no-padding">
        <div className="topic_list">
          <Suspense fallback={<div>loading...</div>}>
            {list.map(item => {
              return <TopicItem key={item.id} item={item} />;
            })}
          </Suspense>
        </div>
        <div className="pagination">
          <Pagination
            showQuickJumper
            current={page}
            defaultCurrent={1}
            total={500}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

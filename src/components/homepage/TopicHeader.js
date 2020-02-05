import React, {useState} from "react"
import {Link} from "react-router-dom"
export default function TopicHeader() {
    var [tabType, setTabType] = useState("");
    return (
      <div className="header">
        <Link
          to="/tab/all"
          className={tabType === "all" ? "topic-tab current-tab" : "topic-tab"}
          onClick={() => setTabType("all")}
        >
          全部
        </Link>
        <Link
          to="/tab/good"
          className={tabType === "good" ? "topic-tab current-tab" : "topic-tab"}
          onClick={() => setTabType("good")}
        >
          精华
        </Link>
        <Link
          to="/tab/share"
          className={tabType === "share" ? "topic-tab current-tab" : "topic-tab"}
          onClick={() => setTabType("share")}
        >
          分享
        </Link>
        <Link
          to="/tab/ask"
          className={tabType === "ask" ? "topic-tab current-tab" : "topic-tab"}
          onClick={() => setTabType("ask")}
        >
          问答
        </Link>
        <Link
          to="/tab/job"
          className={tabType === "job" ? "topic-tab current-tab" : "topic-tab"}
          onClick={() => setTabType("job")}
        >
          招聘
        </Link>
      </div>
    );
  }
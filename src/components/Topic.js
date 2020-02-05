import React from "react";
import api from "../api";
import moment from "moment";
import './topic.css'

export default class Topic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicInfo: ""
    };
  }

  componentDidMount() {
    var params = this.props.match.params;
    api.get(`/topic/${params.id}`).then(res => {
      this.setState({
        topicInfo: res.data.data
      });
    });
  }

  render() {
    var topicInfo = this.state.topicInfo;
    console.log(topicInfo);
    return (
      <div className="panel">
        <div className="header topic_header">
          <span className="topic_full_title">{topicInfo.title}</span>
          <div className="changes">
            <span>发布于{moment(topicInfo.create_at).fromNow()}</span>
            <span>
              作者{topicInfo && topicInfo.author && topicInfo.author.loginname}
            </span>
            <span>{topicInfo.visit_count}次浏览</span>
            <span> 来自{topicInfo.tab}</span>
          </div>
        </div>
        <div className="inner topic">
          <div
            className="topic_content"
            dangerouslySetInnerHTML={{ __html: topicInfo.content }}
          ></div>
        </div>
      </div>
    );
  }
}

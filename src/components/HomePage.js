import React from 'react'
import {Link} from 'react-router-dom'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  componentWillUnmount () {

  }

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
        <div className="inner topic">
          <div className="topic-content">
          </div>
        </div>
      </div>
    )
  }
}
import React from 'react';
import 'antd/dist/antd.css';
import { Pagination } from 'antd';


export default class App extends React.Component {
  state = {
    current: 1,
  };

  onChange = page => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return <Pagination current={this.state.current} onChange={this.onChange} total={50} />;
  }
}
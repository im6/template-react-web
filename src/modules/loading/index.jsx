import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table, Icon, Card, Button, Popconfirm } from 'antd';
import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';
import style from './style.less';


class LoadingPanel extends React.Component {
  constructor(props) {
    super(props);
    let me = this;
    me.state = {
      url: me.props.url
    };
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  componentWillReceiveProps(nextProps){
    let me = this;
    if(!nextProps.url){
      browserHistory.push(me.state.url);
    } else {
      console.error('Illegal next URL: ' + nextProps.url);
    }
  }

  render() {
    let me = this;
    let result = <div className={style.boxLoading} />;
    return result;
  }
}

function mapStateToProps({ auth }) {
  return {
    url: auth.get('url')
  };
}


export default connect(mapStateToProps)(LoadingPanel);
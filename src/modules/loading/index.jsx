import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import style from './style.less';


class LoadingPanel extends React.Component {
  constructor(props) {
    super(props);
    const me = this;
    me.state = {
      url: me.props.url,
    };
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    const me = this;
    if (!nextProps.url) {
      browserHistory.push(me.state.url);
    }
  }

  componentWillUnmount() {

  }

  render() {
    const result = <div className={style.boxLoading} />;
    return result;
  }
}

LoadingPanel.propTypes = {
  url: PropTypes.string.isRequired,
};

function mapStateToProps({ auth }) {
  return {
    url: auth.get('url'),
  };
}


export default connect(mapStateToProps)(LoadingPanel);

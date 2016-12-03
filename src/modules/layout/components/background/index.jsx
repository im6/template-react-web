import React, { PropTypes } from 'react';
import { Card } from 'antd';
import drawCanvas from './particles.js';

class Background extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let me = this;
    let { canvas } = me.refs;
    let obj = me.props.param;
    drawCanvas(canvas, obj);
  }

  render() {
    let me = this;
    return <canvas style={me.props.param.css} ref="canvas"/>
  }
};

export default Background;

import React from 'react';
import { Card, Button } from 'antd';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';

const Hello = ({click}) => <Card>
  Hello World
  <br/>
  <br/>
  <Button onClick={click}>click</Button>
</Card>;


function mapStateToProps(){
  return {}
}
function mapDispatchToProps(dispatch) {
  return({
    click: () => {
      let actcr = createAction('hello/get');
      dispatch(actcr())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
import React from 'react';
import {Table, Button} from 'antd';

class Test1 extends React.Component {
  static propTypes = {
    list: React.PropTypes.array,
  };

  static defaultProps = {
    list: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      info: {
        name: 'peter',
        age: 12
      }
    };
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
  componentDidMount(){
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate');
  }

  clickHandler(px){
    let me = this;
    me.setState({
      list: [...me.state.list, me.state.list.length]
    });
  }

  changeName(){
    let me = this;
    var newInfo = Object.assign(me.state.info, {name: 'Charlie'+Math.random()});
    me.setState({
      info: newInfo
    });
  }

  render() {
    return (<div>
      <button onClick={this.clickHandler.bind(this)}>Plus 1</button>
      <button onClick={this.changeName.bind(this)}>Change Name</button>
      <ul>
        { this.state.list.map((v,k) => <li key={k}>{v}</li>)}
        </ul>
      <b>Name: {this.state.info.name}</b>
      <b>Age: {this.state.info.age}</b>
    </div>);

  }
}

export default Test1;
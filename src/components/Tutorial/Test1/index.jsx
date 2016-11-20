import React from 'react';
import {Table, Button} from 'antd';
import Immutable, {Map, List} from 'immutable';

class Test1 extends React.PureComponent {
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
    let me = this;
    return !Immutable.is(Immutable.fromJS(nextState), Immutable.fromJS(me.state));
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
    var newState = Object.assign({},me.state.info);
    var newInfo = Object.assign(newState,{name: 'Charlie'+ me.state.list.length})

    me.setState({
      info: newInfo
    });
  }

  changeNameBad(){
    let me = this;
    me.setState({
      info: {
        name: 'peter',
        age: 12
      },
      list: me.state.list
    });
    // not gonna change the value but will rerender unnecessarily.
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
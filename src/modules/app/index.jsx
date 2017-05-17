import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../layout/index.jsx';
import QueueAnim from 'rc-queue-anim';
import { default as appService } from './service';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    const me = this;
    me.state = {
      childrenCurrent: null,
      isTransitionSlot: false
    };
  }
  shouldComponentUpdate(nextprops) {
    const me = this;
    const isSame = appService.compareRoutes(nextprops.routes, me.props.routes);
    const willChange = !isSame || me.state.isTransitionSlot;
    return willChange;
  }

  componentWillMount() {
    const me = this;
    me.setDelayEffect();
  }

  componentWillReceiveProps(nextProps) {
    const me = this;
    const isSame = appService.compareRoutes(nextProps.routes, me.props.routes);
    if(isSame) {
      return;
    } else {
      me.setDelayEffect();
    }
  }

  setDelayEffect() {
    const me = this;
    me.setState({
      childrenCurrent: null,
      isTransitionSlot: true,
    });
    setTimeout(() => {
      me.setState({
        childrenCurrent: me.props.children,
        isTransitionSlot: false,
      });
    }, 600);
  }

  render() {
    let me = this;
    return (<Layout>
      <QueueAnim delay={50}
                 type={['right', 'left']}
                 ease={['easeOutQuart', 'easeInOutQuart']}
        >
        {
          me.state.childrenCurrent ?
            <div key="a">
              { me.state.childrenCurrent }
            </div>
            : null
        }
      </QueueAnim>
    </Layout>);
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default App;

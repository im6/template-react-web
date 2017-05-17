import React from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import Layout from '../layout/index.jsx';
import { default as appService } from './service';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    const me = this;
    me.state = {
      childrenCurrent: null,
      isTransitionSlot: false,
    };
  }

  componentWillMount() {
    const me = this;
    me.setDelayEffect();
  }

  componentWillReceiveProps(nextProps) {
    const me = this;
    const isSame = appService.compareRoutes(nextProps.routes, me.props.routes);
    if (!isSame) {
      me.setDelayEffect();
    }
  }
  shouldComponentUpdate(nextprops) {
    const me = this;
    const isSame = appService.compareRoutes(nextprops.routes, me.props.routes);
    const willChange = !isSame || me.state.isTransitionSlot;
    return willChange;
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
    const me = this;
    return (<Layout>
      <QueueAnim
        delay={50}
        type={['right', 'left']}
        ease={['easeOutQuart', 'easeInOutQuart']}
      >
        {
          me.state.childrenCurrent ?
            (<div key="a">
              { me.state.childrenCurrent }
            </div>)
            : null
        }
      </QueueAnim>
    </Layout>);
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  routes: PropTypes.array,
};

export default App;

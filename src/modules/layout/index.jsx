import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './style.less';
import 'font-awesome/less/font-awesome.less';
import img from '!file!./assets/gradient.jpg';
import { Row, Col, Button } from 'antd';

import Footer from './components/footer/index.jsx';
import Header from './components/header/index.jsx';
import Background from './components/background/index.jsx';

let obj = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#56e2ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#56e2ff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "css": {
    "backgroundColor": "#102e43",
    "width": "100%",
    "height": "100%"
  }
};

const Layout = ({children}) =>{

  var result = <div style={{background: `#f5f6f7 url(${img}) repeat-x 0 0`}}>
    <Header className={styles.header}/>
    <div className={styles.canvas}>
      <Background param={obj}/>
    </div>

    <div className={styles.main}>
      <Row>
        <Col span={6}></Col>

        <Col span={6}>
          <div>
            <h2 className={styles.routeName}>Route:</h2>
            <Link to="/">
              <h4>Home</h4>
            </Link>
            <br />
            <Link to="/#/todos">
              <h4>Todos</h4>
            </Link>
            <br />
            <Link to="/#/users">
              <h4>Users</h4>
            </Link>
            <br />
          </div>
        </Col>
        <Col span={6}>
          <div>
            {children}
          </div>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>


    <Footer className={styles.footer}/>
  </div>;

  return result;
};


Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;

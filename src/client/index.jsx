import 'core-js';
import 'regenerator-runtime/runtime';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import store from './config/store';
import Routes from '../routes';

hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);

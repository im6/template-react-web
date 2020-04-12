import React from 'react';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import moduleReducers from '../reducers';
import { reduxName } from '../constant';
import Routes from '../routes';
import Html from '../components/Html';
import Layout from '../components/Layout';

export default (req, res) => {
  const initState = {
    todo: fromJS({
      list: [
        { id: 1, name: 'eat' },
        { id: 2, name: 'drink' },
        { id: 3, name: 'love' },
      ],
    }),
    auth: fromJS({
      name: 'Donald',
    }),
  };
  const store = createStore(combineReducers(moduleReducers), initState);
  const app = (
    <StaticRouter location={req.url}>
      <Provider store={store}>
        <Layout url={req.url}>
          <Routes />
        </Layout>
      </Provider>
    </StaticRouter>
  );
  const appHtml = renderToString(app);
  const htmlDOM = (
    <Html reduxName={reduxName} initState={initState}>
      {appHtml}
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

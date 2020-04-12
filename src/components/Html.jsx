import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';

const Html = ({ children, initState, reduxName }) => {
  return (
    <html lang="en">
      <head>
        <title>React Starter</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="keywords" content="react starter" />
        <meta name="description" content="react starter" />
        <link href="/static/main.css" rel="stylesheet" />
      </head>
      <body>
        <div
          id="app"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: children }}
        />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.${reduxName}=${serialize(initState)}`,
          }}
        />
        <script src="/static/main.js" type="text/javascript" />
      </body>
    </html>
  );
};
Html.propTypes = {
  reduxName: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  initState: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export default Html;

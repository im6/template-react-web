import React from "react";
import serialize from "serialize-javascript";

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
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.${reduxName}=${serialize(initState)}`,
          }}
        />
        <script src="/static/main.js" type="text/javascript" />
      </body>
    </html>
  );
};

export default Html;

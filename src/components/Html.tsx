import React from "react";

type HtmlProps = {
  children: any;
  initState: any;
  reduxName: string;
};

const Html: React.FC<HtmlProps> = ({ children, initState, reduxName }) => {
  return (
    <html lang="en">
      <head>
        <title>React Starter</title>
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="keywords" content="react starter" />
        <meta name="description" content="react starter" />
        {/* <link href="/static/main.css" rel="stylesheet" /> */}
      </head>
      <body>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.${reduxName}=${JSON.stringify(initState)}`,
          }}
        />
        <div id="root">{children}</div>
      </body>
    </html>
  );
};

export default Html;

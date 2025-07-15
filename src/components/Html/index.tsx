import React from "react";

type HtmlProps = {
  children: any;
};

const Html: React.FC<HtmlProps> = ({ children }) => {
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
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Html;

import React from "react";

type HtmlProps = {
  children: any;
};

const Html: React.FC<HtmlProps> = ({ children }) => {
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
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Html;

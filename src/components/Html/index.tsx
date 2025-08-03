import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";

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
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default Html;

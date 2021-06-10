import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { createCss } from '#lib/theme/createCss';
import { App } from '#web/App';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);

const cssLinksFromAssets = (assets: any, entrypoint: any) => {
  return assets[entrypoint]
    ? assets[entrypoint].css
      ? assets[entrypoint].css
          .map((asset: string) => `<link rel="stylesheet" href="${asset}">`)
          .join('')
      : ''
    : '';
};

const jsScriptTagsFromAssets = (assets: any, entrypoint: any, extra = '') => {
  return assets[entrypoint]
    ? assets[entrypoint].js
      ? assets[entrypoint].js
          .map((asset: string) => `<script src="${asset}"${extra}></script>`)
          .join('')
      : ''
    : '';
};

export const renderApp = async (req: any, res: any) => {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );

  const html =
    // prettier-ignore
    `<!doctype html>
    <html lang="">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Public</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${ createCss() }
        ${ cssLinksFromAssets(assets, 'client') }
      </head>
      <body>
        <div id="root">${ markup }</div>
        ${ jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin') }
      </body>
    </html>`;

  return { html };
};

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', async (req, res) => {
    const { html } = await renderApp(req, res);
    res.send(html);
  });

export default server;

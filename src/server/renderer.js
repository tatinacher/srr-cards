import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ServerStyleSheet } from "styled-components";

import { cardsReducer } from "../features/cards-slices";
import { App } from "../App";

const fetch = new Promise((resolve, reject) => {
  setTimeout(
    () =>
      resolve([
        {
          id: 1,
          title: "Card title",
          content: "This is the content of the card",
        },
        {
          id: 2,
          title: "Card title",
          content: "This is the content of the card",
        },
        {
          id: 3,
          title: "Card title",
          content: "This is the content of the card",
        },
      ]),
    500
  );
});

const createStore = (result) =>
  configureStore({
    reducer: {
      cards: cardsReducer,
    },
    preloadedState: {
      cards: result,
    },
  });

const createPage = (req, store) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter location={req.path}>
          <App />
        </StaticRouter>
      </Provider>
    )
  );
  const styleTags = sheet.getStyleTags();
  const preloadedState = store.getState();

  return `<!DOCTYPE html>
              <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                  ${styleTags}
                  </head>
              <body>
                  <div id="root">${content}</div>
                  <script> window.__PRELOADED_STATE__ = ${JSON.stringify(
                    preloadedState
                  ).replace(/</g, "\\u003c")}</script>
                  <script src="/bundle.js"></script>
              </body>
      </html>`;
};

const mainPage = (req, res) =>
  fetch
    .then((result) => createStore(result))
    .then((store) => createPage(req, store))
    .then((render) => res.send(render));

const addPage = (req, res) => {
  const store = createStore([]);
  const render = createPage(req, store);
  res.send(render);
};

const pages = {
  "/": mainPage,
  "/add-card": addPage,
};

export const renderer = (req, res) => {
  const page = pages[req.url];
  if (page) {
    page(req, res);
  } else {
    mainPage(req, res);
  }
};
//как распарсить на страницы? делать запросы только на нужном url

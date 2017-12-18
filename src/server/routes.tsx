import * as request from 'request-promise-native';
import * as ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import App from '../client/App';
import renderer from './renderer';
import configureStore from '../client/configureStore';

const assetsUrl = 'http://localhost:3000/static/js/bundle.js';

export function assets(req: any, res: any) {
  request(`${assetsUrl}`)
    .then((bundle: any) => {
      res.send(bundle);
    })
    .catch((err: Error) => {
      console.log(err);
      res.sendStatus(500);
    });
}

export function main(req: any, res: any) {
  const app = ReactDOMServer.renderToString(<App store={configureStore()} />);
  res.send(renderer(app));
}

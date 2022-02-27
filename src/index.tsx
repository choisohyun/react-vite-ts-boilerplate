import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';

const rootElement = document.getElementById('root');

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement);
}

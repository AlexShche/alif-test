import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

import { setupStore } from './redux/store';
import App from './App';

import './shared/global.css';

export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = setupStore();

root.render(
  <Provider store={store}>
    {/*// @ts-ignore*/}
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>,
);

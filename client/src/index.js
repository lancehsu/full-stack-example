import HttpsRedirect from 'react-https-redirect';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './style/index.css';
import * as serviceWorker from './serviceWorker';
import App from './component/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

render((
  <HttpsRedirect>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </HttpsRedirect>
),
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

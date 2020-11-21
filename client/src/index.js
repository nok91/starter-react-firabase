import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.output.css';
import App from './containers/app';
import store from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

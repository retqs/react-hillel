import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    background:#f2f2f2;
    color:#121212;
    font-family: 'Roboto';
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles></GlobalStyles>
    <App />
  </Provider>,
  document.getElementById('root')
);

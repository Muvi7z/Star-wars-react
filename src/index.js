import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@redux/store/store';
import App from '@containers/App';
import ThemeProvider from '@context/ThemeProvider';
import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

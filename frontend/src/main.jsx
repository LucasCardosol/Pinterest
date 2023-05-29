import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Router'
import GlobalStyle from './GlobalStyle'
import store from './Redux/Store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle/>
      <Router />
    </Provider>
  </React.StrictMode>,
)

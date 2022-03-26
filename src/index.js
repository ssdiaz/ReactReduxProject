// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { composeWithDevTools } from 'redux-devtools-extension';
// to set up dev tppls: like thunk, store, enhancers: // https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { tripReducer } from './reducers/tripReducer';
import App from './App';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( tripReducer,  composeEnhancers( applyMiddleware(thunk) ) );

ReactDOM.render(
  <Provider store={store}>
    <Router> 
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
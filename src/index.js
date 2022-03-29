import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'; 
import { Provider } from 'react-redux';
import { tripReducer } from './reducers/tripReducer';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

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
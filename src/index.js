// to set up dev tppls: like thunk, store, enhancers:
  // https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import './index.css';
// import reportWebVitals from './reportWebVitals';


// set up our store & app connected to store
import { Provider } from 'react-redux' // to connect to our store
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';


// import our Reducers
  // import rootReducer from "./reducers"
import attendeeReducer from './reducers/attendeeReducer'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//store: stores data globally
const myStore = createStore( reducers,  
  composeEnhancers(
    applyMiddleware(thunk) 
  )
);

//waht to do with our store based on certain actions
//dispatch to reducers (send actions to our reducers; reducers return new version of our store)
const reducers = combineReducers(
  {
    attendeeReducer,
  }
)


//pass store in as a prop
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
// provider - allows the store to be global to our components in app












// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



// let store = createStore(reducer, applyMiddleware(thunk))
// const store = createStore(
//   reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
//https://github.com/zalmoxisus/redux-devtools-extension
// const store = createStore(
//   reducer, 
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
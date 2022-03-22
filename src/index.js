//index.js => what to render and where to render

// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { composeWithDevTools } from 'redux-devtools-extension';
// to set up dev tppls: like thunk, store, enhancers: // https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'; 
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';           // set up our store & app connected to store // to connect to our store
import { BrowserRouter as Router } from 'react-router-dom'; //to use Router in App // import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import { attendeeReducer } from './reducers/attendeeReducer';         // import our Reducers    // import rootReducer from "./reducers"
import { activityReducer } from './reducers/activityReducer';
import { tripReducer } from './reducers/tripReducer';

const rootReducer = combineReducers({         //dispatch to reducers (send actions to our reducers; reducers return new version of our store)
  // attendeeReducer,
  // activityReducer, 
  tripReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootReducer,  composeEnhancers( applyMiddleware(thunk) ) );     //store: stores data globally


ReactDOM.render(
  <Provider store={store}>   {/* //pass {store} in as a prop // provider - allows the store to be global to our components in App  // we can connect (to the store) any component that is a child/grandchild of the provider - but to get the data updated, you need to connect that specific component */}
    <Router> 
      <App />                 {/* //NOTE: we are rendering App to the DOM */}
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);












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
















// // to set up dev tppls: like thunk, store, enhancers:
//   // https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html
// // import './index.css';
// // import reportWebVitals from './reportWebVitals';
// // import { composeWithDevTools } from 'redux-devtools-extension';
// import React from 'react';
// import ReactDOM from 'react-dom';

// import { createStore, applyMiddleware, compose, combineReducers } from 'redux'; 
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux'; // set up our store & app connected to store // to connect to our store
// import { BrowserRouter as Router } from 'react-router-dom'; //to use Router in App // import { BrowserRouter as Router, Route } from 'react-router-dom';

// import App from './App';
// import attendeeReducer from './reducers/attendeeReducer'; // import our Reducers    // import rootReducer from "./reducers"
// import activitiesReducer from './reducers/activitiesReducer';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()


// //what to do with our store based on certain actions
// //dispatch to reducers (send actions to our reducers; reducers return new version of our store)
// const rootReducer = combineReducers({
//     attendeeReducer,
//     activitiesReducer
//   });

// //store: stores data globally
// // let store = createStore( attendeeReducer,  composeEnhancers(applyMiddleware(thunk)));
// const store = createStore( rootReducer,  composeEnhancers( applyMiddleware(thunk) ) );

// // const store = createStore(reducers, composeWithDevTools(
// //   applyMiddleware(thunk),
// //   // other store enhancers if any
// // ));


// //pass store in as a prop
// //NOTE: we are rendering App to the DOM in the below
// ReactDOM.render(
//   <Provider store={store}>
//     <Router> 
//       <App />
//     </Router>
//   </Provider>
//   ,
//   document.getElementById('root')
// );
// // provider - allows the store to be global to our components in app
//   // we can connect (to the store) any component that is a child/grandchild of the provider - but to get the data updated, you need to connect that specific component 




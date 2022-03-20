// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';

import React from 'react';
import { connect } from 'react-redux';
import AttendeesContainer from './containers/AttendeesContainer';

// import { fetchAttendees } from './actions/fetchAttendees';


class App extends React.Component {

  // componentDidMount() { //note: fetch request default ot GET so you dont need the second part
  //   // this.props.fetchAttendees()
  //   // this.props.fetchAttendees({type: 'FETCH_ATTENDEES', payload: {name: 'Sami'}})
  // }

  render() {
    return (
      <div className="App">
        <h1>App Container</h1>
        <AttendeesContainer />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   //mapStateToProps - accessing values in our store as props so we can use this.props.___ in our App component
//   // for SEEING what's in our store
//   return {
//     attendees: state.attendees
//   }
// }

// mapDispatch allows us to update our store; dispatch new actions to our store directly from the above component
// return value of mapStateToProps is coming from our store
// const mapDispatchToProps = action => {
//   //for adding a value to our store
//   return{
//   }
// }


// export default App;
// connect - allows access to a particular part of our store; connects our redux store to the component in between Provider

// export default connect(mapStateToProps, mapDispatchToProps)(App);
//NOTE: instead of mapDispatchToProps, you can pass in an action creator 

// export default connect(null, {fetchAttendees})(App);
  // this connect is automatically calling dispatch for us on the return value of fetchAccounts.
  // thunk allows us to call dispatch inside the action creator to allow it to wait for the action dispatch to finish before we dispatch anything to our reducer
//NOTE - APP is not currently connected to our Redux store!
  export default App;





 //to connect to store: ``````````````````````````````````````````````````````
// class App extends React.Component {

//   componentDidMount() { //note: fetch request default ot GET so you dont need the second part
//     this.props.fetchAttendees()
//     // this.props.fetchAttendees({type: 'FETCH_ATTENDEES', payload: {name: 'Sami'}})
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>App Container</h1>
//         <AttendeesContainer />
//       </div>
//     );
//   }
// }


// const mapStateToProps = state => { //state from our Redux store
//   console.log(state, "-> this is state in mapStateToProps")
//   // need to send this state as props to child components in the render above ... attendees={this.props.attendees} 
//   // this method allows us to access the state as props

//   return {
//       attendees: state.attendees
//   }
// }

// export default connect(mapStateToProps, {fetchAttendees})(App);
//`````````````````````````````````````````````````````````````````````````````














// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;



// fetch requests:

  // componentDidMount() { //note: fetch request default ot GET so you dont need the second part
  //   fetch('http://localhost:3000/api/v1/attendees', {
  //     method: 'GET'
  //   })
  //   .then(response => response.json()) //response here is the return value of the fetch request
  //   .then(data => {
  //     console.log(data[0].name)
  //     console.log(data)
  //   })  //data here is the return value above (which is the fetch return in json form)

  //   fetch('http://localhost:3000/api/v1/activities', {
  //     method: 'GET'
  //   })
  //   .then(response => response.json()) //response here is the return value of the fetch request
  //   .then(data => {
  //     console.log(data[0].name)
  //     console.log(data)
  //   })  //data here is the return value above (which is the fetch return in json form)
  // }

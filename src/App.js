// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import { connect } from 'react-redux';



class App extends Component {


  componentDidMount() { //note: fetch request default ot GET so you dont need the second part
    fetch('http://localhost:3000/api/v1/attendees', {
      method: 'GET'
    })
    .then(response => response.json()) //response here is the return value of the fetch request
    .then(data => {
      console.log(data[0].name)
      console.log(data)
    })  //data here is the return value above (which is the fetch return in json form)

    // fetch('http://localhost:3000/api/v1/activities', {
    //   method: 'GET'
    // })
    // .then(response => response.json()) //response here is the return value of the fetch request
    // .then(data => {
    //   console.log(data[0].name)
    //   console.log(data)
    // })  //data here is the return value above (which is the fetch return in json form)
  }

  render() {
    return (
      <div className="App">
        App

        <header className="App-header">

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

        </header>
      </div>
    );
  }
}
export default connect()(App);
// connect - allows access to a particular part of our store








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

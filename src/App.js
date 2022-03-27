import React from 'react';
import { Switch,  Route } from "react-router-dom";
import NavBar from './components/NavBar';
import TripsContainer from './containers/TripsContainer';
import Home from './components/Home'
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  render() {
    return (
         <Container className="p-5 mb-4 bg-light rounded-3">
          <h1>BACHELORETTE PLANNER</h1>

          <NavBar />

          <TripsContainer />

          <Switch>           
            <Route exact path="/trips" ></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Container>
    );
  }
}

export default App;



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


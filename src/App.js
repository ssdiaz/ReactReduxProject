import React from 'react';
import NavBar from './components/NavBar';
import TripsContainer from './containers/TripsContainer';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


class App extends React.Component {
  render() {
    return (
      // <div class="container">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <NavBar />
        <TripsContainer />
      </Container>
      // </div>
    );
  }
}

export default App;
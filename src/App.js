import React from 'react';
import NavBar from './components/NavBar';
import TripsContainer from './containers/TripsContainer';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  render() {
    return (
      <Container className="p-5 mb-4 bg-light rounded-3">
        <NavBar />
        <TripsContainer />
      </Container>
    );
  }
}

export default App;
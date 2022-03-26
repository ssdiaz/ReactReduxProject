import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import { fetchTrips } from '../actions/Trips/fetchTrips';

import Trips from '../components/Trip/Trips';
import Trip from '../components/Trip/Trip';
import NavBar from '../components/NavBar'
import TripInput from '../components/Trip/TripInput';
// import { updateAttendee } from '../actions/Attendee/updateAttendee';

class TripsContainer extends React.Component {

    // state = {}

    // displayTripInput = () => {
    //     this.setState({
    //         displayTripInput: !this.state.displayTripInput
    //     })           
    // }
    
    // if (this.state.displayTripInput === false) {
    //     this.render(
    //         <button onClick={() => this.displayTripInput()}>Add Trip</button>  
    //     )
    // }

    componentDidMount() {
        this.props.fetchTrips() 

        // this.setState({
        //     ...this.state,
        //     displayTripInput: false
        // })
    }

    render() {
        // console.log(this.state,'state')
        return (
            <div>
            {/* {this.checkIfTripExists()} */}

                <NavBar />

                <Switch>
                    <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props && this.props.trips} />}/>
                    <Route path='/trips/new' render={(routerProps) => <TripInput {...routerProps} trips={this.props && this.props.trips}    />}/>
                    <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props && this.props.trips}  />}/>
                    {/* <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props && this.props.trips}  displayTripInput={this.state.displayTripInput}  />}/> */}
                
                </Switch>
                    {/* <Route path='/trips/new' /> */}
                    {/* <Route path='/trips/new' component={AccountInput}/> */}

                {/* <Trips trips={this.props.trips} />  */}

            {/* <button onClick={() => this.displayTripInput()}>Add Trip</button>   */}

            {/* {this.state.displayTripInput === false ? <button onClick={() => this.displayTripInput()}>Add Trip</button>  : <button onClick={() => this.displayTripInput()}>clear</button>} */}

            </div>
        );
    }
}

const mapStateToProps = state => { 

    let attendeesArray = state.tripReducer.trips.map(trip => trip.attendees)

    return {
        trips: state.tripReducer.trips,

        // trips: state.trips
        attendees: state.tripReducer.trips.map(trip => trip.attendees)
    }
}


export default connect(mapStateToProps, {fetchTrips})(TripsContainer);
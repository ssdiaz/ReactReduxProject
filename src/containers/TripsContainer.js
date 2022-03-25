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




    componentDidMount() {
        this.props.fetchTrips() 
        // this.props.updateAttendee()
        // console.log(this.props, 'props?')
    }


    checkIfTripExists() {
        // console.log(this.props, 'props?')

        // if (this.props.trips.find( trip => trip.id !== undefined)) {
    
        // } else {
    
        // }
    }


    render() {
        return (
            <div>

            {/* {this.checkIfTripExists()} */}

                <NavBar />
                <Switch>



                    <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props && this.props.trips}/>}/>
                    <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props && this.props.trips}/>}/>
                </Switch>
                    {/* <Route path='/trips/new' /> */}
                    {/* <Route path='/trips/new' component={AccountInput}/> */}


                TRIPS CONTAINER - this can be delete to keep this clean
                {/* <Trips trips={this.props.trips} />  */}


               
            </div>
        );
    }
}

const mapStateToProps = state => { 
    // console.log(state, 'state!!')
    // console.log(state.trips.trips, 'state.trips!')
    // console.log(state.tripReducer.trips.length, 'state!')
    // console.log(state.tripReducer.trips, 'state! trip')

    let attendeesArray = state.tripReducer.trips.map(trip => trip.attendees)

    return {
        trips: state.tripReducer.trips,

        // trips: state.trips
        attendees: state.tripReducer.trips.map(trip => trip.attendees)
    }
}


export default connect(mapStateToProps, {fetchTrips})(TripsContainer);
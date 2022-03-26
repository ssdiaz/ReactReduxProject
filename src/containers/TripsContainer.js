import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { fetchTrips } from '../actions/Trips/fetchTrips';
import Trips from '../components/Trip/Trips';
import Trip from '../components/Trip/Trip';

class TripsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTrips() 
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips}/>}/>
                    <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips}/>}/>
                </Switch>
                    {/* <Route path='/trips/new' component={TripInput}/> */}
                    {/* <Route path='/trips/new' /> */}
            </div>
        );
    }
}

const mapStateToProps = state => { 
    console.log(state)
    // let attendeesArray = state.tripReducer.trips.map(trip => trip.attendees)
    let attendeesArray = state.trips.map(trip => trip.attendees)

    return {
        trips: state.trips,
        attendees: state.trips.map(trip => trip.attendees)
        // trips: state.tripReducer.trips,
        // attendees: state.tripReducer.trips.map(trip => trip.attendees)
    }
}


export default connect(mapStateToProps, {fetchTrips})(TripsContainer);
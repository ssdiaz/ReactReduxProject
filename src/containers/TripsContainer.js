import React from 'react';
import { connect } from 'react-redux';
import {Route, Switch} from 'react-router-dom'
import { fetchTrips } from '../actions/Trips/fetchTrips';

// import { updateAttendees } from '../actions/Attendee/updateAttendees';
import Trips from '../components/Trip/Trips';
import Trip from '../components/Trip/Trip';
import NavBar from '../components/NavBar'
import TripInput from '../components/Trip/TripInput';

class TripsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTrips() 
        // console.log(this.props, 'props?')
    }


    render() {
        console.log(this.props, 'props?')
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips}/>}/>
                    <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips}/>}/>
                </Switch>
                    {/* <Route path='/trips/new' /> */}
                    {/* <Route path='/trips/new' component={AccountInput}/> */}

                TRIPS CONTAINER
                <Trips trips={this.props.trips} /> 
                <TripInput />
            </div>
        );
    }
}

const mapStateToProps = state => { 
    console.log(state.trips, 'state!')
    // console.log(state.trips.trips, 'state.trips!')
    // console.log(state.tripReducer.trips.length, 'state!')
    // console.log(state.tripReducer.trips, 'state! trip')
    return {
        // trips: state.tripReducer.trips
        trips: state.trips
        // attendees: state.tripReducer.trips
    }
}


export default connect(mapStateToProps, {fetchTrips})(TripsContainer);
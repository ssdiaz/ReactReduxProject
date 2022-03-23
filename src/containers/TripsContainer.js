import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrips } from '../actions/Trips/fetchTrips';

// import { updateAttendees } from '../actions/Attendee/updateAttendees';
import Trips from '../components/Trip/Trips';
import Trip from '../components/Trip/Trip';
import NavBar from '../components/NavBar'
import {Route, Switch} from 'react-router-dom'


class TripsContainer extends Component {

    componentDidMount() {
        this.props.fetchTrips() 
        // console.log(this.props, 'props?')
    }


    render() {
        // console.log(this.props.trips, 'props? trips arrays')
        // console.log(this.props, 'props?')

        return (
            <div>
                <NavBar />
                <Switch>
                    {/* <Route path='/trips/new' /> */}
                    {/* <Route path='/trips/new' component={AccountInput}/> */}
                    <Route path='/trips/:id' render={(routerProps) => <Trip {...routerProps} trips={this.props.trips}/>}/>
                    <Route path='/trips' render={(routerProps) => <Trips {...routerProps} trips={this.props.trips}/>}/>
                </Switch>

                TRIPS CONTAINER
            </div>
        );
    }
}

const mapStateToProps = state => { 
    // console.log(state, 'state!')
    // console.log(state.tripReducer.trips.length, 'state!')
    // console.log(state.tripReducer.trips, 'state! trip')
    return {
        trips: state.tripReducer.trips
        // attendees: state.tripReducer.trips
    }
}


export default connect(mapStateToProps, {fetchTrips})(TripsContainer);
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { fetchTrips } from '../actions/Trips/fetchTrips';
import Trips from '../components/Trip/Trips';
import Trip from '../components/Trip/Trip';

import TripInput from '../components/Trip/TripInput';
import ActivityInput from '../components/Activity/ActivityInput';
class TripsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTrips() 
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/trips/new' render={ (routerProps) => <TripInput {...routerProps} trips={this.props.trips} /> } />
                    <Route path='/trips/:id' render={ (routerProps) => <Trip {...routerProps} trips={this.props.trips} /> } />
                    <Route path='/trips' render={ (routerProps) => <Trips {...routerProps} trips={this.props.trips} /> } />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => { 
    return { 
        trips: state.trips,
    }
}


export default connect(mapStateToProps, {fetchTrips})(TripsContainer);
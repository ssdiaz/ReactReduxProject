import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { fetchTrips } from '../actions/Trips/fetchTrips';
import Trips from '../components/Trip/Trips';
import Trip from '../components/Trip/Trip';
import TripInput from '../components/Trip/TripInput';


class TripsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchTrips() 
    }

    render() {
        return (
            <>
                <Switch>           
                    <Route exact path='/trips' render={ (routerProps) => <Trips {...routerProps} trips={this.props.trips} /> } /> 
                    <Route exact path='/trips/new' component={TripInput} />
                    <Route exact path='/trips/:id/edit' render={ (routerProps) => <TripInput {...routerProps} trips={this.props.trips} /> } />    
                    <Route path='/trips/:id' render={ (routerProps) => <Trip {...routerProps} trips={this.props.trips} /> } />
                </Switch>
            </>
        );
    }
}

export default connect(state => ({ trips: state.trips }), {fetchTrips})(TripsContainer);
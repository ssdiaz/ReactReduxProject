import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Activities from '../components/Activity/Activities';
import ActivityInput from '../components/Activity/ActivityInput';

class ActivitiesContainer extends React.Component {

    render() { 
        let trip = this.props && this.props.trip

        return (
            <div>              
                <Activities activities={trip.activities} trip={trip} />

            <Switch>
                <Route exact path='/trips/:trip_id/activities/:new' render={ (routerProps) => <ActivityInput {...routerProps} trip={trip} /> } />
                <Route path='/trips/:trip_id/activities/:id/edit' render={ (routerProps) => <ActivityInput {...routerProps} trip={trip} /> } /> 
            </Switch>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(ActivitiesContainer);
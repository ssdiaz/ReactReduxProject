import React from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import Activities from '../components/Activity/Activities';
import ActivityInput from '../components/Activity/ActivityInput';

class ActivitiesContainer extends React.Component {
    render() { 
        let trip = this.props.trip

        return (
            <div>              
                <Activities activities={trip.activities} trip={trip} />

                <Route exact path='/trips/:trip_id/activities/new' render={ (routerProps) => <ActivityInput {...routerProps} trip={trip} /> } />
                <Route path='/trips/:trip_id/activities/:id/edit' render={ (routerProps) => <ActivityInput {...routerProps} trip={trip} /> } /> 
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
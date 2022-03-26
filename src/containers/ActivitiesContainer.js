import React, { Component } from 'react';

import { connect } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'

import ActivityInput from '../components/Activity/ActivityInput';
import Activities from '../components/Activity/Activities';
import Activity from '../components/Activity/Activity';


class ActivitiesContainer extends Component {

    render() { 
        // console.log(this.props, 'props  this.props.activities') //=> tip (one)

        let tripID = this.props && this.props.trip.id //=2        
        // let activities = this.props.trip.activities

        return (
            <div>              
                <Activities activities={this.props && this.props.activities}    trip={this.props && this.props.trip} key={this.props && this.props.trip.id}  />

                <Switch>
                    <Route path={`/trips/${tripID}/activities/new`} component={(routerProps) => <ActivityInput   {...routerProps} activities={this.props.trip.attendees}  trip={this.props.trip}  /> } />
                    <Route path={`/trips/${tripID}/activities/:name`} render={ (routerProps) => <Activity {...routerProps} activities={this.props.trip.attendees}  trip={this.props.trip}  /> } />
                    <Route path={`/trips/${tripID}/activities`} render={ (routerProps) => <Activities {...routerProps} activities={this.props.trip.attendees}  trip={this.props.trip}  /> } />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    // console.log(state, 'activ containers state - mapStateToProps')

    return {
        ...state,
        activities: props.trip.activities
    }
}

// export default connect(mapStateToProps, {fetchActivities})(ActivitiesContainer);
export default connect(mapStateToProps)(ActivitiesContainer);
import React from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import ActivityInput from '../components/Activity/ActivityInput';
import Activities from '../components/Activity/Activities';
import Activity from '../components/Activity/Activity';


class ActivitiesContainer extends React.Component {

    render() { 
        let tripID = this.props && this.props.trip.id
        // console.log(this.props)

        return (
            <div>              
                <Activities activities={this.props && this.props.trip.activities} trip={this.props && this.props.trip} key={this.props && this.props.trip.id}  />

                {/* <Switch>
                    <Route path={`/trips/${tripID}/activities/new`} component={ (routerProps) => <ActivityInput {...routerProps} activities={this.props.trip.activities}  trip={this.props.trip}  /> } />
                    <Route path={`/trips/${tripID}/activities/:id`} render={ (routerProps) => <Activity {...routerProps} activities={this.props.trip.activities}  trip={this.props.trip}  /> } />
                    <Route path={`/trips/${tripID}/activities`} render={ (routerProps) => <Activities {...routerProps} activities={this.props.trip.activities}  trip={this.props.trip}  /> } />
                </Switch> */}
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
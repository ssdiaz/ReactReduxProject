import React, { Component } from 'react';

//addded 3/21
import { connect } from 'react-redux'
import { fetchActivities } from '../actions/Activity/fetchActivities';

import ActivityInput from '../components/Activity/ActivityInput';
import Activities from '../components/Activity/Activities';
import Activity from '../components/Activity/Activity';

import { Route, Switch } from 'react-router-dom'



class ActivitiesContainer extends Component {

    componentDidMount() {
        this.props.fetchActivities() 
    }

    render() {
        console.log(this.props.activities, 'propsssssss   this.props.activities')

        return (
            <div>
                <h2>Activities Container</h2>
                <ActivityInput />
                <Activities activities={this.props.activities} />

                <Switch>
                    {/*<Activities activities={this.props.activities} /> */}   {/* here we're sending the state/data as props to the component */}
                    {/* <ActivityInput /> */}
                    <Route  path='/activities/new' component={ActivityInput} />
                    <Route path='/activities/:id' render={ (routerProps) => <Activity {...routerProps} activities={this.props.activities} /> } />
                    <Route  path='/activities' render={ (routerProps) => <Activities {...routerProps} activities={this.props.activities} /> } />            
                </Switch>



            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state, 'activ containers state - mapStateToProps')
    console.log(state.activities, 'state.activ - mapStateToProps')
    return {
        // activities: state.activities
        activities: state.activitiesReducer.activities
    }
}

export default connect(mapStateToProps, {fetchActivities})(ActivitiesContainer);
import React, { Component } from 'react';

//addded 3/21
import { connect } from 'react-redux'
import { fetchActivities } from '../actions/Activity/fetchActivities';

import ActivityInput from '../components/Activity/ActivityInput';
import Activities from '../components/Activity/Activities';

class ActivitiesContainer extends Component {

    componentDidMount() {
        // console.log(this.props, "here")
        this.props.fetchActivities()
    }

    render() {
        return (
            <div>
                <h2>Activities Container</h2>
                <ActivityInput />
                <Activities />
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state, 'activ containers state - mapStateToProps')
    // return state
    return {
        activities: state.activities
    }
}

export default connect(mapStateToProps, {fetchActivities})(ActivitiesContainer);
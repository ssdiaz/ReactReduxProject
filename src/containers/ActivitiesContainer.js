import React, { Component } from 'react';
import ActivityInput from '../components/ActivityInput';
import Activities from '../components/Activities';

class ActivitiesContainer extends Component {
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

export default ActivitiesContainer;
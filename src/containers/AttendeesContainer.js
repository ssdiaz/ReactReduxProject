//container should render other comonponent, pass them data, redner data. Typically class components. 

// import React from 'react';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAttendees  } from '../actions/fetchAttendees';

import Attendees from '../components/Attendees';
import AttendeesInput from '../components/AttendeeInput';


class AttendeesContainer extends Component {

    // when this component mounts, we have to make that connection to the backend; use compnentDidMounts to make connection to backend anytime the component refreshes/changes
    // when you refreash, redux/react will not hold the states, so you lose your data if you don't call the below
    componentDidMount() {
        this.props.fetchAttendees()
    }

    render() {
        return(
            <div>
                <h2>Attendees Container</h2>
                <Attendees attendees={this.props.attendees} /> {/* here we're sending the state/data as props to the component */}
                <AttendeesInput />
            </div>
        )
    }
}

const mapStateToProps = state => { //state from our Redux store
    console.log(state, "-> this is state in mapStateToProps")
    // need to send this state as props to child components in the render above ... attendees={this.props.attendees} 
    // this method allows us to access the state as props

    return {
        attendees: state.attendees
    }
}

export default connect(mapStateToProps, {fetchAttendees})(AttendeesContainer);
// export default AttendeesContainer;
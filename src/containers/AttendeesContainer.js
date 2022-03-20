//container should render other comonponent, pass them data, redner data. Typically class components. 

// import React from 'react';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAttendees  } from '../actions/fetchAttendees';

import Attendees from '../components/Attendees';
import AttendeesInput from '../components/AttendeeInput';


class AttendeesContainer extends Component {

    componentDidMount() {
        this.props.fetchAttendees()
    }

    render() {
        return(
            <div>
                Attendees Container text
                <AttendeesInput />
                <Attendees attendees={this.props.attendees} />
            </div>
        )
    }
}

const mapStateToProps = state => { //state from our Redux store
    console.log(state, "-> this is state in mapStateToProps")
    //send as props to child components in the render above

    return {
        attendees: state.attendees
    }
}

export default connect(mapStateToProps, {fetchAttendees})(AttendeesContainer);
// export default AttendeesContainer;
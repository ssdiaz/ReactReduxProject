//container should render other comonponent, pass them data, redner data. Typically class components. 

// import React from 'react';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAttendees  } from '../actions/fetchAttendees';

import Attendees from '../components/Attendees';
import AttendeeInput from '../components/AttendeeInput';
import Attendee from '../components/Attendee';

import { Route } from 'react-router-dom'


class AttendeesContainer extends Component {

    // when this component mounts, we have to make that connection to the backend; use compnentDidMounts to make connection to backend anytime the component refreshes/changes
    // when you refreash, redux/react will not hold the states, so you lose your data if you don't call the below
    componentDidMount() {
        this.props.fetchAttendees() //returns the attendees array
    }

    render() {
        return(
            <div>
                <h2>Attendees Container</h2>
                
                {/*<Attendees attendees={this.props.attendees} /> */}   {/* here we're sending the state/data as props to the component */}
                {/* <AttendeeInput /> */}
                <Route exact path='/attendees/new' component={AttendeeInput} />
                <Route path='/attendees/:id' render={ (routerProps) => <Attendee {...routerProps} attendees={this.props.attendees} /> } />
                <Route exact path='/attendees' render={ (routerProps) => <Attendees {...routerProps} attendees={this.props.attendees} /> } />            
            </div>
        )
    }
ex

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



    //Routes overview [[in return()]]
        //  render above takes in a function/regular component syntax, whereas component just points to a component (can't pass props with component) 
        // the components are no longer rendering directly; they render on the condition of the URLs
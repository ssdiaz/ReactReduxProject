//container should render other comonponent, pass them data, redner data. Typically class components. 

// import React from 'react';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAttendees } from '../actions/Attendee/fetchAttendees';

import Attendees from '../components/Attendee/Attendees';
import AttendeeInput from '../components/Attendee/AttendeeInput';
import Attendee from '../components/Attendee/Attendee';

import { Route, Switch } from 'react-router-dom'


class AttendeesContainer extends Component {

    // when this component mounts, we have to make that connection to the backend; use compnentDidMounts to make connection to backend anytime the component refreshes/changes
    // when you refreash, redux/react will not hold the states, so you lose your data if you don't call the below
    componentDidMount() {
        this.props.fetchAttendees() //returns the attendees array
    }
    
    render() {
        
        console.log(this.props.attendees, 'propsssssss   this.props.attendees')
        // console.log(this.props.attendees && this.props.attendees.map(att => att.name), 'propsssssss')


        return(
            <div>
                <h2>Attendees Container</h2>
                <Switch>
                    {/*<Attendees attendees={this.props.attendees} /> */}   {/* here we're sending the state/data as props to the component */}
                    {/* <AttendeeInput /> */}
                    <Route  path='/attendees/new' component={AttendeeInput} />
                    <Route path='/attendees/:id' render={ (routerProps) => <Attendee {...routerProps} attendees={this.props.attendees} /> } />
                    <Route  path='/attendees' render={ (routerProps) => <Attendees {...routerProps} attendees={this.props.attendees} /> } />            
                </Switch>
            </div>
        )
    }
// Switch Notes - first route that matches that path; chooses first route that mateches that path; order matters! 

}

const mapStateToProps = state => { //state from our Redux store
    console.log(state, "-> this is state in mapStateToProps")
    console.log(state.attendees, "-> this is state.ATTENDEES in mapStateToProps")
    // console.log(state.attendeeReducer.attendees, "-> this is state.ATTENDEES in mapStateToProps")
    // need to send this state as props to child components in the render above ... attendees={this.props.attendees} 
    // this method allows us to access the state as props

    return {
        // attendees: state.attendees
        attendees: state.attendeeReducer.attendees
    }
}

export default connect(mapStateToProps, {fetchAttendees})(AttendeesContainer);
// export default AttendeesContainer;



//Routes overview [[in return()]]
    //  render above takes in a function/regular component syntax, whereas component just points to a component (can't pass props with component) 
    // the components are no longer rendering directly; they render on the condition of the URLs
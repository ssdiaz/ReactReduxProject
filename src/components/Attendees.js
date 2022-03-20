import React, { Component } from 'react';


//functional comp, bnecasue it presents a list of accounts.... could be class comp as a well
    // with a class component, if props are being passed, we can just call with this.props
    // with a functional component, we have to pass the props in as an argument
        // functional components CANNOT have a render statement --- they're just functions
        // 



const Attendees = props => {
// class Attendees extends Component {

    return(
        <div>
            Attendees text
        </div>
    )
}

export default Attendees;
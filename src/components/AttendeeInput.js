import React, { Component } from 'react';

//uncontrolled comonent
//class compoent so we can control our form; local state to control value or form data availible to redux store.
class AttendeesInput extends Component {

    constructor(props) {
        super(props)
        this.input = React.createRef();
    }

    render() {
        return(
            <div>
                <h3>Attendees Input</h3>

                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="Name" />
                    <button type="submit">Create New Attendee</button>
                </form>

            </div>
        )
    }


}





export default AttendeesInput;



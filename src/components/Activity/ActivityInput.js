import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addActivity } from '../../actions/Activity/addActivity';

//class to keep track of inputs in the (local) state ---- use as redux????
class ActivityInput extends Component {
    state = {   
        name: "",
        description: "",
        cost: 0,
        mandatory: null,
        priority: " ",
        includeInTotal: true,
        comment: "",
        day: "",
        time: "",
        trip_id: null
    }

    handleChange = event => {
        this.setState({ //setState is asynchrounus - won't clear out state until rest of function has ran
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addActivity(this.state)
        this.setState = {   
            name: "",
            description: "",
            cost: 0,
            mandatory: null,
            priority: " ",
            includeInTotal: true,
            comment: "",
            day: "",
            time: "",
            trip_id: null,
        }
    }

    render() {
        return (
            <div>
                <h3>Activity Input</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" className="name" placeholder='name' value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    
                    <label>Description: </label>
                    <input type="text" className="description" placeholder='description' value={this.state.description} name="description" onChange={this.handleChange} /><br/>

                    <label>Cost: </label>
                    <input type="text" className="cost" placeholder='cost' value={this.state.cost} name="cost" onChange={this.handleChange} /><br/>
                    
                    <label>Mandatory: </label>
                    <input type="text" className="mandatory" placeholder='mandatory' value={this.state.mandatory} name="mandatory" onChange={this.handleChange} /><br/>
                    
                    <label>Priority: </label>
                    {/* <input type="text" className="priority" placeholder=' ' value={this.state.priority} name="priority" onChange={this.handleChange} /><br/> */}
                    <select placeholder=' ' value={this.state.priority} name="priority" onChange={this.handleChange}>
                        <option> </option>
                        <option>HIGH</option>
                        <option>MEDIUM</option>
                        <option>LOW</option>
                    </select><br/>

                    <label>Comments: </label>
                    <textarea type="text" className="comment" value={this.state.comment} name="comment" onChange={this.handleChange} /><br/>

                    <label>Day: </label>
                    <input type="text" className="day" placeholder='day' value={this.state.day} name="day" onChange={this.handleChange} /><br/>
                    
                    <label>Time: </label>
                    <input type="text" className="time" placeholder='time' value={this.state.time} name="time" onChange={this.handleChange} /><br/>
               
                    <button type="submit">Create New Activity</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {addActivity})(ActivityInput);
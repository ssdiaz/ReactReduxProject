import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addActivity } from '../../actions/Activity/addActivity';
import { updateActivity } from '../../actions/Activity/updateActivity';

class ActivityInput extends Component {
 
    constructor(props) {

        console.log(props,'props in constructor')

        super(props)

        if (props.activity) {
            let activity = props.activity

            this.state = {   
                name: activity.name,
                description: activity.description,
                cost:activity.cost,
                mandatory: activity.mandatory,
                priority: activity.priority,
                includeInTotal: activity.includeInTotal,
                comment: activity.comment,
                day: activity.day,
                time: activity.time,
                trip_id: activity.trip_id,
                input_type: 'edit',
            }
        } else {
            this.state = {   
                name: '',
                description: '',
                cost: 0,
                mandatory: true,
                priority: '',
                includeInTotal: true,
                comment: '',
                day: '',
                time: '',
                trip_id: props.trip.id,
                input_type: 'add',
            }
        }
    }


    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let tripID;

        if (this.state.input_type === 'add') {
            tripID = this.props.trip.id
            this.props.addActivity(this.state, this.props)

            this.setState({
                name: '',
                description: '',
                cost: 0,
                mandatory: true,
                priority: '',
                includeInTotal: true,
                comment: '',
                day: '',
                time: '',
                trip_id: tripID,
                input_type: 'add',
            })

        } else if (this.state.input_type === 'edit') {
            console.log(this.props)
            tripID = this.props.activity.trip_id
            this.props.updateActivity(this.state, this.props)
        }

        this.props.history.push(`/trips/${tripID}`)
    }

    render() {
        return (
            <div>
                <h3>{this.state.input_type === 'add' ? 'ADD ACTIVITY' : 'EDIT ACTIVITY'}</h3>

                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>
                    <input type="text" className="name" placeholder='name' value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                    
                    <label>Priority: </label>
                    {/* <input type="text" className="priority" placeholder=' ' value={this.state.priority} name="priority" onChange={this.handleChange} /><br/> */}
                    <select placeholder=' ' value={this.state.priority} name="priority" onChange={this.handleChange}>
                        <option> </option>
                        <option>HIGH</option>
                        <option>MEDIUM</option>
                        <option>LOW</option>
                    </select><br/>
                    
                    <label>Cost: </label>
                    <input type="text" className="cost" placeholder='cost' value={this.state.cost} name="cost" onChange={this.handleChange} /><br/>
                    
                    <label>Description: </label>
                    <input type="text" className="description" placeholder='description' value={this.state.description} name="description" onChange={this.handleChange} /><br/>

                    <label>Mandatory: </label>
                    {/* <input type="text" className="mandatory" placeholder='mandatory' value={this.state.mandatory} name="mandatory" onChange={this.handleChange} /><br/> */}
                    <select value={this.state.mandatory} name="mandatory" onChange={this.handleChange}>
                        <option>TRUE</option>
                        <option>FALSE</option>
                    </select><br/>
                    

                    <label>Comments: </label>
                    <textarea type="text" className="comment" value={this.state.comment} name="comment" onChange={this.handleChange} /><br/>

                    <label>Day: </label>
                    <input type="text" className="day" placeholder='day' value={this.state.day} name="day" onChange={this.handleChange} /><br/>
                    
                    <label>Time: </label>
                    <input type="text" className="time" placeholder='time' value={this.state.time} name="time" onChange={this.handleChange} /><br/>
               
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {addActivity, updateActivity})(withRouter(ActivityInput));
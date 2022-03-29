import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addActivity } from '../../actions/Activity/addActivity';
import { updateActivity } from '../../actions/Activity/updateActivity';


class ActivityInput extends Component {

    constructor(props) {
        super(props)

        if (this.props.match.params.id) {
            let activity = this.findActivity()

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

    findActivity = () => {
        return this.props.trip.activities.find(activity => activity.id == this.props.match.params.id)
    }
    
    handleChange = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let tripID = this.props.trip.id

        if (this.state.input_type === 'add') {
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
            let activityID = this.findActivity().id

            this.props.updateActivity(this.state, tripID, activityID)
        }

        this.props.history.push(`/trips/${tripID}`)
    }

    render() {
        return (
            <div className="alert alert-info" >
                <div className="card-body">
                    <h3>{this.state.input_type === 'add' ? 'ADD ACTIVITY' : 'EDIT ACTIVITY'}</h3>

                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label > Activity </label>
                            <input type="text" className="form-control" placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange} /><br/>
                        </div>

                        <div className="form-group">
                            <label> Description </label>
                            <input type="text" className="form-control" placeholder='Description' value={this.state.description} name="description" onChange={this.handleChange} /><br/>
                        </div>


                        <div className="form-group row">
                            <div className="form-group col-md-6">
                                <label> Priority </label>
                                <select className="form-control" value={this.state.priority} name="priority" onChange={this.handleChange}>
                                    <option defaultValue> </option>
                                    <option> HIGH </option>
                                    <option> MEDIUM </option>
                                    <option> LOW </option>
                                </select><br/>
                            </div>

                            <div className="form-group col-md-6">
                                <label> Cost </label>
                                <input type="text" className="form-control" value={this.state.cost} name="cost" onChange={this.handleChange} /><br/>
                            </div>

                            {/* <div className="col-sm-2">
                                <label> Mandatory? </label>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" defaultChecked={this.state.includeInTotal} checked={this.state.mandatory} name="mandatory" onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <label> Include in Total? </label>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" defaultChecked={this.state.includeInTotal} checked={this.state.includeInTotal} name="includeInTotal" onChange={this.handleChange} />
                                </div>
                            </div> */}
                        </div>


                        <div className="form-group row">
                            <div className="col-sm-6">
                                <label> Day </label>
                                <input type="text" className="form-control" placeholder='Day' value={this.state.day} name="day" onChange={this.handleChange} /><br/>
                            </div>

                            <div className="col-sm-6">
                                <label> Time </label>
                                <input type="text" className="form-control" placeholder='Time' value={this.state.time} name="time" onChange={this.handleChange} /><br/>
                            </div>
                        </div>


                        <div className="form-group">
                            <label> Comments </label>
                            <textarea type="text" className="form-control" value={this.state.comment} name="comment" onChange={this.handleChange} /><br/>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, {addActivity, updateActivity})(withRouter(ActivityInput));
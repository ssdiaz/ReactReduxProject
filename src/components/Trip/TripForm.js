const TripForm = (props) => {
    return (
        <div className="alert alert-info" >
            <div className="card-body">

                <h3>{props.formData.input_type === 'add' ? 'ADD TRIP' : 'EDIT TRIP'}</h3>

                <form onSubmit={props.handleSubmit}>                       
                    <label>Location </label>
                    <input type="text" className="form-control" name="location" onChange={props.handleChange}  value={props.formData.location} /><br/>
                    
                    {/* <label>Start Date: </label>
                    <input type="text" className="phone" value={this.state.start_date} name="start_date" onChange={this.handleChange} /><br/>

                    <label>End Date: </label>
                    <input type="text" className="relationship"  value={this.state.end_date} name="end_date" onChange={this.handleChange} /><br/>
                    
                    <label>Bride ID: </label>
                    <input type="text" className="status" value={this.state.bride_id} name="bride_id" onChange={this.handleChange} /><br/>
                    */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default TripForm;
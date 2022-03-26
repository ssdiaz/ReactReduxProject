


const TripForm = (props) => {
    console.log(props)

    return(
        <div>
            hi
                   
                <label>Location: </label>
                <input type="text" className="Name" value={this.props.location} name="location" onChange={this.handleChange} /><br/>
                
                <label>Start Date: </label>
                <input type="text" className="phone" value={this.state.start_date} name="start_date" onChange={this.handleChange} /><br/>

                <label>End Date: </label>
                <input type="text" className="relationship"  value={this.state.end_date} name="end_date" onChange={this.handleChange} /><br/>
                
                <label>Bride ID: </label>
                <input type="text" className="status" value={this.state.bride_id} name="bride_id" onChange={this.handleChange} /><br/>
                

        </div>
    )


}


export default TripForm
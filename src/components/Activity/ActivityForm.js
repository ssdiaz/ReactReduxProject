import NumberFormat from 'react-number-format';

const ActivityForm = (props) => {
    return (
        <div className="alert alert-info" >
            <div className="card-body">
                <h3>{props.formData.input_type === 'add' ? 'ADD ACTIVITY' : 'EDIT ACTIVITY'}</h3>

                <form onSubmit={props.handleSubmit}>

                    <div className="form-group">
                        <label > Activity </label>
                        <input type="text" className="form-control" placeholder='Name' value={props.formData.name} name="name" onChange={props.handleChange} /><br/>
                    </div>

                    <div className="form-group">
                        <label> Description </label>
                        <input type="text" className="form-control" placeholder='Description' value={props.formData.description} name="description" onChange={props.handleChange} /><br/>
                    </div>


                    <div className="form-group row">
                        <div className="form-group col-md-6">
                            <label> Priority </label>
                            <select className="form-control" value={props.formData.priority} name="priority" onChange={props.handleChange}>
                                <option defaultValue> </option>
                                <option> HIGH </option>
                                <option> MEDIUM </option>
                                <option> LOW </option>
                            </select><br/>
                        </div>

                        <div className="form-group col-md-6">
                            <label> Cost </label>
                            <NumberFormat className="form-control" placeholder='Cost' thousandSeparator={true} prefix={'$'} value={props.formData.cost} name="cost" onChange={props.handleChange}  />
                            {/* <input type="text" className="form-control" value={props.formData.cost} name="cost" onChange={props.handleChange} /><br/> */}
                        </div>

                        {/* <div className="col-sm-2">
                            <label> Mandatory? </label>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" defaultChecked={props.formData.includeInTotal} checked={props.formData.mandatory} name="mandatory" onChange={props.handleChange} />
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <label> Include in Total? </label>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" defaultChecked={props.formData.includeInTotal} checked={props.formData.includeInTotal} name="includeInTotal" onChange={props.handleChange} />
                            </div>
                        </div> */}
                    </div>


                    <div className="form-group row">
                        <div className="col-sm-6">
                            <label> Day </label>
                            <input type="text" className="form-control" placeholder='Day' value={props.formData.day} name="day" onChange={props.handleChange} /><br/>
                        </div>

                        <div className="col-sm-6">
                            <label> Time </label>
                            <input type="text" className="form-control" placeholder='Time' value={props.formData.time} name="time" onChange={props.handleChange} /><br/>
                        </div>
                    </div>


                    <div className="form-group">
                        <label> Comments </label>
                        <textarea type="text" className="form-control" value={props.formData.comment} name="comment" onChange={props.handleChange} /><br/>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ActivityForm;
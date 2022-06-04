import NumberFormat from 'react-number-format';

const AttendeeForm = (props) => {
    return (
        <div className="alert alert-info" >
            <div className="card-body">
                <h3><span className="headers">{props.formData.input_type === 'add' ? 'Add Attendee' : 'Edit Attendee'}</span></h3>

                <form onSubmit={props.handleSubmit}>                       
                    
                    <div className="form-group row">  
                        <div className="form-group col-md-6">
                            <label> Name </label>
                            <input type="text" className="form-control" placeholder='Name' value={props.formData.name} name="name" onChange={props.handleChange} /><br/>
                        </div>
                            
                        <div className="form-group col-md-6">
                            <label> Phone Number </label>
                            <NumberFormat format="+1 (###) ###-####" mask="_" className="form-control" placeholder='+1 (###) ###-####' value={props.formData.phone} name="phone" onChange={props.handleChange} />
                        </div>
                    </div>

                    <div className="form-group row">    
                        <div className="form-group col-md-6">  
                            <label> Relationship </label>
                            <select className="form-control"  value={props.formData.relationship} name="relationship" onChange={props.handleChange} >
                                <option defaultValue value='Attende'>Attendee</option>                    
                                <option value ='Bride'> Bride </option>
                                <option value ='Bridesmaid'> Bridesmaid </option>
                                <option value ='Maid of Honor'> Maid of Honor </option>
                                <option value ='Matron of Honor'> Matron of Honor </option>
                            </select><br/>
                        </div>
                            
                        <div className="form-group col-md-6">   
                            <label> Status </label>
                            <select className="form-control" value={props.formData.status} name="status" onChange={props.handleChange} >
                                <option defaultValue value=''> </option>                    
                                <option value ='Confirmed'>Confirmed</option>
                                <option value ='Maybe'>Maybe</option>
                                <option value ='Not Coming'>Not Coming</option>
                            </select><br/>
                        </div>
                    </div>   

                    <div className="form-group row">
                        <div className="form-group col-md-6">   
                            <label> Lodging Budget </label>
                            <input type="text" className="form-control" placeholder='Lodging Budget' value={props.formData.lodgingBudget} name="lodgingBudget" onChange={props.handleChange} /><br/>
                        </div>
                            
                        <div className="form-group col-md-6">   
                            <label> Events Budget </label>
                            <input type="text" className="form-control" placeholder='Events Budget' value={props.formData.eventsBudget} name="eventsBudget" onChange={props.handleChange} /><br/>
                        </div>
                    </div>

                    <div className="form-group">    
                        <label> Notes </label>
                        <textarea type="text" className="form-control" placeholder='Notes' value={props.formData.notes} name="notes" onChange={props.handleChange} /><br/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

                <button className="btn btn-outline-danger" onClick={ props.handleDelete }>Delete</button>
            </div>
        </div>
    )
}

export default AttendeeForm;
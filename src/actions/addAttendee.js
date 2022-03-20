

export const addAttendee = (formStateData) => { //data comes from the state of the form
    // debugger
    return (dispatch) => {
        
    // componentDidMount() { //note: fetch request default ot GET so you dont need the second part
        fetch('http://localhost:3000/api/v1/attendees', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            } ,    
            method: 'POST',
            body: JSON.stringify(formStateData)
        })
        // .then(response => response.json()) //response here is the return value of the fetch request
        // .then(data => {
        // console.log(data[0].name)
        // console.log(data)
        // })  //data here is the return value above (which is the fetch return in json form)

    }

}
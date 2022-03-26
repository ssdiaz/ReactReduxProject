import { connect } from 'react-redux'
import { deleteTrip } from '../../actions/Trips/deleteTrip'
import AttendeesContainer from '../../containers/AttendeesContainer'
import ActivitiesContainer from '../../containers/ActivitiesContainer'

const Trip = (props) => {

   let trip = props.trips.find( (trip) => trip.id == props.match.params.id)

   const handleDelete = () => {
        props.deleteTrip(trip.id)        
        props.history.push('/trips')
    }
        
    return (
        <div>   
            <ul key={trip.id}>
                <li>Location: {trip.location}</li>
                <li>Start Date: {trip.start_date}</li>
                <li>End Date: {trip.end_date}</li>
                <AttendeesContainer trip={trip} />
                <ActivitiesContainer trip={trip} />
            </ul>
            
            <button onClick={() => handleDelete()}>Delete Trip</button>  
        </div>
    )
}

export default connect(null, {deleteTrip})(Trip)







// class Trip extends React.Component {
//     // const Trip = (props) => {
    
//         handleDelete = () => {
//             let trip = this.props.trips.find( trip => trip.id == this.props.match.params.id)
//             // console.log(trip, 'trip in delete')
//             this.props.deleteTrip(trip.id) //not this.props here because it's a functinal component
            
//             this.props.history.push('/trips')
//         }
    
//         render() {
    
//             let trip = this.props.trips.find( (trip) => trip.id == this.props.match.params.id)
            
//             return (
//                 <div>   
//                     <ul key={trip.id}>
//                         <li>Location: {trip.location}</li>
//                         <li>Start Date: {trip.start_date}</li>
//                         <li>End Date: {trip.end_date}</li>
//                         <AttendeesContainer trip={trip} />
//                         <ActivitiesContainer trip={trip} />
//                     </ul>
                    
//                     <button onClick={() => this.handleDelete()}>Delete Trip</button>  
//                 </div>
//             )
//         }
//     }
    
//     export default connect(null, {deleteTrip})(Trip)
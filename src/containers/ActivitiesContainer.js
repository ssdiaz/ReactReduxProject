import React from 'react';
import { connect } from 'react-redux'
import Activities from '../components/Activity/Activities';


class ActivitiesContainer extends React.Component {

    render() { 
        return (
            <div>              
                <Activities activities={this.props && this.props.trip.activities} trip={this.props && this.props.trip} key={this.props && this.props.trip.id}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(ActivitiesContainer);
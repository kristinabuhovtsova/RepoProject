import MyTravelsForm from './MyTravelsForm';
import {connect} from 'react-redux'

const mapStateToProps = function(state) {
    return {
        in: state.in.in
    }
  }


const MyTravels= connect(mapStateToProps)(MyTravelsForm)
export default MyTravels


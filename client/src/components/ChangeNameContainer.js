import {connect} from 'react-redux'
import ChangeName from './ChangeName'

const mapStateToProps = function(state) {
    return {
        in: state.in.in
    }
  }

const ChangeNameContainer= connect(mapStateToProps)(ChangeName)
export default ChangeNameContainer

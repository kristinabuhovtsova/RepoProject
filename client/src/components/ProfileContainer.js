import {connect} from 'react-redux'
import Profile from './MyProfile'

const mapStateToProps = function(state) {
    return {
        in: state.in.in,
        stat: state.statistics,
        username: state.in.username
    }
  }

const ProfileContainer= connect(mapStateToProps)(Profile)
export default ProfileContainer


import  SignOutAction from '../actions/signOutAction';
import {connect} from 'react-redux'
import NavBar from './NavBar'


const mapStateToProps = function(state) {
    return {
        in: state.in.in
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
         SignOut: () => {
          dispatch(SignOutAction())
        }

  }
}

const NavBarContainer= connect(mapStateToProps, mapDispatchToProps)(NavBar)
export default NavBarContainer

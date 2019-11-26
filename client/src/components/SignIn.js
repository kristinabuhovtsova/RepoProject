import SignInForm from "./SignInForm";
import {connect} from 'react-redux';

const mapStateToProps = function(state) {
    return {
        in: state.in.in
    }
}

const SignIn= connect(mapStateToProps)(SignInForm)
export default SignIn

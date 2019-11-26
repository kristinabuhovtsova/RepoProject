const initialState= {
    in: 0
}
function signInOutReducer (state=initialState, action) {
    switch (action.type) {
        case 'SIGN_IN': 
        return  {
            in:  action.result,
            username: action.username,
            country: action.count
        }
        case 'SIGN_OUT': {
            return {
                in: action.result
            }
        }

        case 'CHANGE_NAME':
            console.log('signinout', action.newname, action.usercountry)
            return {
                in:1,
                username: action.newname,
                country: action.usercountry
            }

        default:
            return state
    }
}

export default signInOutReducer
const SIGN_IN='SIGN_IN';
export default function SignInAction (user, usercountry){
    console.log(usercountry)
    console.log(100)
    return {
        type: SIGN_IN, 
        result: 1, 
        username: user.name,
        count: user.country}
}
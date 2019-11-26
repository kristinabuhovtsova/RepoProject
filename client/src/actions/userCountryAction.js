const USER_COUNTRY='USER_COUNTRY';
export default function SignInAction (userdata){
    return {
        type: USER_COUNTRY, 
        result: 1, 
        username: userdata.name,
        country: userdata.counrty}
}
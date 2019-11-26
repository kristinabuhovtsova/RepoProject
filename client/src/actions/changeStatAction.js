const CHANGE_STAT='CHANGE_STAT';
export default function changeStatAction (usernm, usercountry, countries){
    return {
        type: CHANGE_STAT, 
        username: usernm,
        usercountry: usercountry,
        viscountries: countries
        }
}
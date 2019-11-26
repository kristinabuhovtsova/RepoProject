export default function changeNameAction (oldnm, newnm, country){
    console.log('action:', oldnm, newnm, country)
    return {
        type: 'CHANGE_NAME', 
        oldname: oldnm,
        newname: newnm,
        usercountry: country
        }
}
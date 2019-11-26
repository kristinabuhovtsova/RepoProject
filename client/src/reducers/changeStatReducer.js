
const initialState= []

function changeStatReducer (state=initialState, action) {
    switch (action.type) {
        case 'CHANGE_STAT':
                console.log('here')
                const newstatistics=[]
                let flag=0
                state.forEach(info => { if (info.username !== action.username) {
                        newstatistics.push (info)}
                    else {
                        flag=1
                        newstatistics.push({username: action.username, usercountry: action.usercountry, viscountries: action.viscountries})
                    }})
            if (!flag) {
                newstatistics.push({username: action.username, usercountry: action.usercountry, viscountries: action.viscountries})
            }
            console.log(newstatistics)
        return  newstatistics

        case 'STATISTICS_HAS_LOADED': 
            console.log(action.statistics)
            return action.statistics

        case 'DELETE':
        const newstat=[]
            state.forEach(info => {if (info.username !== action.username) {
                    newstat.push (info)}})
        return newstat

        case 'CHANGE_NAME': 
         const newstatis=[]
         state.forEach(info => {if (info.username === action.oldname) {
             newstatis.push ({username: action.newname, usercountry: info.usercountry, viscountries: info.viscountries})
        }
        else { newstatis.push (info)}}
        )
        return newstatis

        default:
            return state
    }
}

export default changeStatReducer
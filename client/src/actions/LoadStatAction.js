import axios from 'axios'

function StatHasLoaded (statistics) {
    return  {
        type: 'STATISTICS_HAS_LOADED',
        statistics
    }; 
}

export function FetchingStat() {
    console.log('in fetching')
    return (dispatch) => {
        console.log('inside')
        axios.get('/catalog/statistics/')
            .then((response) => {console.log(response);dispatch(StatHasLoaded(response.data))})
    };
}

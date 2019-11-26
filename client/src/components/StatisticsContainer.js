import {connect} from 'react-redux'
import Statistics from './Statistics';

const mapStateToProps = function(state) {
    return {
        stat: state.statistics,
        in: state.in.in,
        usercountry: state.in.country
    }
}


const StatisticsContainer= connect(mapStateToProps)(Statistics)
export default StatisticsContainer
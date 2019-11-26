import React from 'react';
import {Field, reduxForm} from 'redux-form'
import store from '../store';
import changeStatAction from '../actions/changeStatAction';
import '../css/Button.css';
import axios from 'axios';


const SendingStatistics = (countries) => {
    const usercountry=store.getState().in.country
    const username=store.getState().in.username
    const viscountries=Object.keys(countries)
    axios.post ('/catalog/users/' + username, {'trav': viscountries})
        .then (res => store.dispatch (changeStatAction(username, usercountry, res.data)))
}


class MyTravelsForm extends React.Component{
        constructor (props) {
        super (props) 
        this.state = {countries: [], 
        finished: null}
        this.Clear=this.Clear.bind(this);
    }

    Clear () {
      this.setState ({finished: true})
    }

        componentDidMount() {
            fetch ('catalog/countries')
            .then (res => res.json())
            .then((count) =>this.setState({countries: count}))}


        render () {
        const { handleSubmit, submitting } = this.props
        if (this.props.in) {
        return (
           <form onSubmit={handleSubmit(SendingStatistics)} className='col-9'>
                <div>
                        <h2>Choose the countries where you`ve been</h2 >
                        <div>
                        {this.state.countries.map((country, ind) =>
                        <div>
                        <label>{country} </label>
                        <Field name={country} id={ind} component="input" type="checkbox" />
                        </div>)}
                        </div>
                </div>
                {this.state.finished && <p>Travels added</p>}
                <button onClick={this.Clear} type = 'submit' disabled={submitting}>Submit</button>
               
                </form>
        )}
        else {
            return <h3>Firstly, you need to sign in</h3>
        }

}}

export default reduxForm ({
    form: 'MyTravelsForm'
})(MyTravelsForm)
import React from 'react';
import {Field, reduxForm} from 'redux-form'
import store from '../store';
import axios from 'axios';
import changeNameAction from '../actions/changeNameAction';

const Changing = (values) => {
    const username = store.getState().in.username
    console.log(values.newname, username)
    axios.put ('/catalog/signup', {'newname': values.newname, 'oldname': username})
        .then (store.dispatch (changeNameAction(username, values.newname, store.getState().in.country)))
}

class ChangeName extends React.Component{
        constructor (props) {
        super (props) 
        this.state = {countries: []}
    } 
        render () {
        const { handleSubmit, submitting } = this.props
        if (this.props.in) {
        return (
           <form onSubmit={handleSubmit(Changing)}>
                <div>
                       
                        <label> Enter new name </label>
                        <Field name='newname' component="input" type="texy" />
                    
                </div>
                <button type = 'submit' disabled={submitting}>Change name</button>
                </form>
        )}
        else {
            return <h3>Firstly, you need to sign in</h3>
        }

}}

export default reduxForm ({
    form: 'ChangeNameForm'
})(ChangeName)
import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { SubmissionError } from 'redux-form';
import axios from 'axios'
import signInAction from '../actions/signInAction';
import store from '../store';
import '../css/Button.css';
import { Redirect } from 'react-router';

function signin (values) {
    return axios.get ('catalog/reqsignin', {params: {username: values.username, password : values.password}})
    .then (res => {  
        if (res.data) {
        store.dispatch(signInAction({'name': values.username, 'country': res.data}))
    }
     else 
    { throw new SubmissionError({
        password: 'Wrong username or password',
        username: 'Wrong username or password',
        _error: 'Wrong username or password!'}
        );}
}
)}
const renderField = ({input, label, type, meta: { touched, error, warning } }) => (
    <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
class SignInForm extends React.Component{
        constructor (props) {
          super (props) 
          this.state = {
            finished: null
          }
          this.Clear=this.Clear.bind(this);
        }

          Clear () {
            this.setState ({finished: true})
          }
        render () {
        const { handleSubmit, pristine, reset, submitting } = this.props
        if (this.props.in) {
          return (<Redirect to= '/mytravels'/>)
        } else {
        return (
           <form onSubmit={handleSubmit(signin)} className= 'col-9'>
               <Field name ='username' type = 'text' component={renderField} label = 'Username'/>
               <Field name ='password' type = 'password' component={renderField} label = 'Password'/>
             
                <button className="btn btn-outline-primary signinbut" type = 'submit' onClick={this.Clear} disabled={submitting}>Sign In</button>
                <button className="btn btn-outline-primary clear signinbut" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>

          </form>)}
}}


export default reduxForm ({
    form: 'SignInForm'
})(SignInForm)
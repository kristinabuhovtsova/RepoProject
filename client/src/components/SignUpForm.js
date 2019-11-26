import React from 'react';
import {Field, reduxForm} from 'redux-form';
import '../css/Button.css';

const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length < 5) {
      errors.username = 'Must be 5 characters or more'
    }

    if (!values.password) {
      errors.password = 'Required'
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = 'Required'
    }
    else if (values.password!==values.confirmpassword) {
      errors.password = 'Passwords must match'
    }  return errors 
}

const renderField = ({input, label, type, meta: { touched, error, warning } }) => (
    <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

class SignUpForm extends React.Component{
        constructor (props) {
          super (props)
          this.state = {
            finished: false, 
            countries: []
          }
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
        const { handleSubmit, pristine, reset, submitting } = this.props
        return (
           <form onSubmit={handleSubmit} className = 'col-9'>
               <Field name ='username' type = 'text' component={renderField} label = 'Username'/>
               <Field name ='password' type = 'password' component={renderField} label = 'Password'/>
               <Field name ='confirmpassword' type = 'password' component={renderField} label = 'Confirm password'/>
               
               <div>
               <label>Where do you live?   </label>
               <Field name="country" component="select" className="form-control">
               {this.state.countries.map((country, ind) =>
                <option key={ind} value = {country}>{country}</option>)}
               </Field>
               </div>

                 <button className="btn btn-outline-primary signinbut" type = 'submit' disabled={submitting}>Sign Up</button> 
                 <button className="btn btn-outline-primary clear signinbut" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
              
           </form>
        )}}

export default reduxForm ({
  form: 'SignUpForm',
  validate
})(SignUpForm)


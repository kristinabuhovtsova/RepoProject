import React from 'react';
import SignUpForm from "./SignUpForm";
import axios from 'axios';
import { Redirect } from 'react-router'


class SignUp extends React.Component  {
    constructor (props) {
        super (props)
        this.state = {
          finished: false, 
          usererror:false,
          countries: []
        }
        this.SignUpRequest=this.SignUpRequest.bind(this);
      }

    SignUpRequest(userData) {
        const existingusers=[]
  
        axios.get ('/catalog/users')
            .then (res => {res.data.forEach(name => {
                 existingusers.push(name)})
            if (existingusers.includes(userData.username)) {
                    this.setState ({usererror: true})
            }
            else {
        this.setState ({finished:true})
        this.setState ({usererror: false})
        return axios.post ('catalog/signup', {'username': userData.username, 'password' : userData.password, 'country':userData.country})
    }})}

    render () {
    if (this.state.usererror){
        return (<div>
            <SignUpForm onSubmit={this.SignUpRequest} /><p>This nickname is reserved, try another one</p></div>)
    }
    else{
    if (this.state.finished) {
        return (<Redirect to='/signin' />)
    } else {
    return (
    <SignUpForm onSubmit={this.SignUpRequest} />)}}
}}

export default SignUp;
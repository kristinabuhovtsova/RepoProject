import React from 'react'
import axios from 'axios'; 
import { Redirect } from 'react-router'

export default function SignUpRequest(userData) {
    console.log('here')
    return axios.post ('catalog/signup', {'username': userData.username, 'password' : userData.password, 'country':userData.country})
        .then (<Redirect to='/signin'/>)
}
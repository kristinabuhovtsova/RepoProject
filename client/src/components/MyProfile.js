import React from 'react';
import store from '../store'
import {NavLink} from 'react-router-dom'
import axios from 'axios';
import SignOutAction from '../actions/signOutAction';
import DeleteAction from '../actions/deleteAction';
import '../css/Button.css';

const Deletting = () => {
    const username = store.getState().in.username
    axios.delete ('/catalog/signup', {params: {'username': username}})
        .then (store.dispatch (SignOutAction()))
        .then (store.dispatch(DeleteAction(username)))
}

class Profile extends React.Component {
    constructor (props) {
    super (props)
    this.state = { countries: []}
   };
  
    componentDidMount() {
        const allstat=this.props.stat
        const name= this.props.username
        let viscountr=[]
        if (this.props.stat !== []) {
        allstat.forEach ((info) => {if (info.username === name){
            info.viscountries.map(country =>  viscountr.push(country))}})}
        this.setState ({countries: viscountr})}
    

    render () {
        if (this.props.in) {
            return (
                <div className = 'col-9'>
                    <h3>My profile</h3>
                    <div className='profile-button'>
                    <button className="btn btn-outline-primary signinbut" onClick={Deletting}>Delete profile </button>
                    </div>
                    <p>Name: <NavLink to='/changename'> {this.props.username}</NavLink> </p>
                    {this.state.countries && <p>My travels: </p>}
                    {this.state.countries && this.state.countries.map((country, ind) =>
                    <p key={ind}>{ind+1} 
                    <NavLink to={String('/countries/'+ country)}> {country}</NavLink>
                    </p>
                    )}
                </div>
            )}
        else {
            return (<h3>Firstly, you need to sign in</h3>)
        }
        }
}

export default Profile
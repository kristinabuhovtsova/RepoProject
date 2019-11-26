import React from 'react';
import '../css/App.css';
import {NavLink } from 'react-router-dom'

class Home extends React.Component {
  render () {
  return (
    <div className = 'col-9'>
        <h1>Welcome to Travellers</h1>
        <p className='countries'> Here you can find some geografical data and information about different countries. 
            For example, you can find boardes of counrty, it's currency, languages, capital and a lot of more.</p>
        <p>If you want to find more about statisitcs of travels all over the wrold, please, come to <NavLink to={'/signup'} >Sign Up</NavLink>.</p>
    </div>
  );}
}

export default Home;


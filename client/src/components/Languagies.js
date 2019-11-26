import React from 'react';
import '../css/App.css';
import '../css/Countries.css'
import {NavLink } from 'react-router-dom'


class Languagies extends React.Component {
    state = {languagies: []}
  
    componentDidMount() {
      fetch(`/catalog/languagies`)
        .then (res => res.json())
        .then((lang) => {
            this.setState({languagies: lang})})
   }
    render () {
    return (
      <div className = 'col-9 countries'>
        <h1>
          There is the list of all languagies
        </h1>
        {this.state.languagies.map((lang, ind) =>
            <p key={ind}>{ind+1} 
            <NavLink to={String('/languagies/'+ lang)}> {lang}</NavLink>
            </p>
          )}
      </div>
    );}
  }
  
  export default Languagies;

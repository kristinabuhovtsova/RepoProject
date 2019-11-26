import React from 'react';
import '../css/App.css';
import '../css/Countries.css'
import {NavLink } from 'react-router-dom'

class Regions extends React.Component {
    state = {regions: []}
  
    componentDidMount() {
      fetch(`/catalog/regions`)
        .then (res => res.json())
        .then((reg) => {
            this.setState({regions: reg})})
   }
    render () {
    return (
      <div className = 'col-9 countries'>
        <h1>
          There is the list of all regions
        </h1>
        {this.state.regions.map((reg, ind) =>
            <p key={ind}>{ind+1} 
            <NavLink to={String('/regions/'+ reg)}> {reg}</NavLink>
            </p>
          )}
      </div>
    );}
  }
  
  export default Regions;

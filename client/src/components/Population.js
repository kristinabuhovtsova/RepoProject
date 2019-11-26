import React from 'react';
import '../css/App.css';
import '../css/Countries.css'
import {NavLink } from 'react-router-dom'


class Population extends React.Component {
    state = {countries: []}

    componentDidMount() {
      fetch('/catalog/sort')
        .then (res => res.json())
        .then((count) => { 
            this.setState({countries: count})})
   }
    render () {
    return (
      <div className = 'col-9 countries'>
        <h1>
        There is the rank of countries in descending order of population.
        </h1>
        {this.state.countries.map((count, ind) =>
            <p key={ind}>{ind+1} 
            <NavLink to={String('/countries/'+ count.country)}> {count.country} </NavLink>
             {count.population}
            </p>
          )}
      </div>
    );}
  }
  
  export default Population;
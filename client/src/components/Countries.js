import React from 'react';
import '../css/App.css';
import '../css/Countries.css'
import {NavLink } from 'react-router-dom'


class Countries extends React.Component {
  constructor() {
    super ()
    this.state = {countries: [], 
      searching: ""}
   }

    Processing= e => {
       this.setState({searching: e.target.value.toLowerCase()})};

  
    componentDidMount() {
      fetch(`/catalog/countries`)
        .then (res => res.json())
        .then((count) =>this.setState({countries: count}))
   }
    render () {
    return (
      <div className = 'col-9 countries'>
        <h1>
          There is the list of all countries
        </h1>
        <input type="text" placeholder="search" onChange={this.Processing}/>
        <List searchfor={this.state.searching} countries = {this.state.countries}/>
       </div>
    );}
  }
  
class List extends React.Component {

    Filtring = a => a.filter(item => item.toLowerCase().includes(this.props.searchfor));
    
    render () {
      let listofcountries=this.Filtring(this.props.countries)
          return( 
     <div>
        {listofcountries.map((country, ind) => 
         <p key={ind}>{ind+1} 
         <NavLink to={String('/countries/'+ country)}> {country}</NavLink>
         </p>)}
      </div>
    )}}

    export default Countries;

import React from 'react';
import '../css/App.css';
import '../css/Countries.css'
import { NavLink } from 'react-router-dom'


class Country extends React.Component {
   state = {
            name: null,
            area: null,
            region: null,
            population: null,
            neighbours: null,
            capital: null,
            currency: null, 
            flag:null}
  
    componentDidMount() {
      let address=`/catalog/countries/`+this.props.match.params.name
      fetch(address)
        .then (res => res.json())
        .then((country) => {
            this.setState((state) => {
                return {name: country.name, area: country.area, region: country.region, 
                        population: country.population, neighbours: country.neighbours, 
                        capital: country.capital, currency: country.currency, flag: country.flag}
            })
        });
   }

    render () {
    return (
    <div className = 'col-9'>
     <h1>{this.state.name}</h1>
     <div className='row'>
     <div className='col-5'>
     <p>Area: {this.state.area}</p>
     <p>Region: <NavLink to={String('/regions/'+ this.state.region)}> {this.state.region}</NavLink></p>
     <p>Population: {this.state.population}</p>
     <p>Capital: {this.state.capital}</p>
     <p>Currency: {this.state.currency}</p>
     </div>
     <div className=' col-7 flag' style={{backgroundImage: 'url(' + this.state.flag + ')'}}></div>
   </div>
     </div>
     );}
  }
  
  export default Country;

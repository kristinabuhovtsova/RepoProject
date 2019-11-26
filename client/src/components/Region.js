import React from 'react';
import '../css/App.css';
import '../css/Countries.css'
import { NavLink } from 'react-router-dom'


class Region extends React.Component {
   state = {countries: []}
  
    componentDidMount() {
      let address=`/catalog/regions/`+this.props.match.params.name
      fetch(address)
        .then (res => res.json())
        .then((count) => {
            this.setState((state) => {
                return {countries: count}
            })
        });
   }

    render () {
    return (
    <div className = 'col-9 countries'>
     <h1>There are all countries in {this.props.match.params.name}</h1>
     {this.state.countries.map((country, ind) =>
            <p key={ind}>{ind+1} 
            <NavLink to={String('/countries/'+ country)}> {country}</NavLink>
            </p>
          )}
     </div>
     );}
  }
  
  export default Region;

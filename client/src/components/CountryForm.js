import React from 'react';

class CountryForm extends React.Component{
        state = {
        countries: []}
     
   componentDidMount() {
      fetch('/catalog/countries')
        .then (res => res.json())
        .then((count) =>this.setState({countries: count}))}

    render () 
    {
     return (
                <>
                {this.state.countries.map((country, ind) =>
                <option key={ind} value = {country}>{country}</option>)}
                </>
            )
    }
}

export default CountryForm

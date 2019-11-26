import React from 'react';
import '../css/App.css';
import {NavLink } from 'react-router-dom'

function comparePop(a, b) {
  return  b.visits - a.visits;
}

class Statistics extends React.Component {
  
  constructor () {
    super ()
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
      let list=[]
      fetch ('catalog/countries')
      .then (res => res.json())
      .then((count) => {count.forEach ((one) => list.push ({'name': one, 'visits': 0, 'fromwhere': null}));this.setState({countries: list})})
    }
    

      
        render () {
        let topcountries=this.state.countries
        this.props.stat.forEach(data=> {data.viscountries.forEach(country => {
          if (topcountries.find (item => item.name===country)){
          topcountries.find (item => item.name===country).visits+=1
          topcountries.find (item => item.name===country).fromwhere = data.usercountry}
        })})
        topcountries.sort(comparePop);
        let yourtopcountries=[]
        topcountries.forEach (one => {if (one.fromwhere===this.props.usercountry) {
              yourtopcountries.push({'name' : one.name, 'visits': one.visits})
        }})
        const toplist=[]
        topcountries=topcountries.slice(0, 10)
        topcountries.forEach (one => {if (one.visits !==0) {
            toplist.push(one)
        }})
        yourtopcountries=yourtopcountries.slice(0,5)

            return (
              this.props.in ?
                <div>
                  <div>
                    <h3>Top of the most popular countries <br/> for travel:</h3>
                    {toplist.map((country, ind) => 
                    <p key={ind}>{ind+1} 
                    <NavLink to={String('/countries/'+ country.name)}> {country.name} </NavLink> (Visits:{country.visits})
                    </p>)}</div>
                    <div>
                    <h3>The most popular countries for travel  <br/> among poplutaion of your country:</h3>
                    {yourtopcountries.map((country, ind) => 
                    <p key={ind}>{ind+1} 
                    <NavLink to={String('/countries/'+ country.name)}> {country.name} </NavLink> (Visits:{country.visits})
                    </p>)}</div>
                </div>
                : <h3>Firstly, you need to sign in</h3>

            )
        }
}


export default Statistics
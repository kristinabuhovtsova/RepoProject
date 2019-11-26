import React from 'react'
import {NavLink } from 'react-router-dom'
import '../css/Button.css';

const NavBar = (props) => {
    return (
        props.in
          ? <div>
             <nav> 
            <div>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div>
                <NavLink to='/countries'>Countries</NavLink>
            </div>
            <div>
                <NavLink to='/languagies'>Languagies</NavLink>
            </div>
            <div>
                <NavLink to='/regions'>Regions</NavLink>
            </div>
            <div>
                <NavLink to='/populationrank'>Rank of countries in descending order of population</NavLink>
            </div>

            <div>
                <NavLink to='/signup'>Sign Up</NavLink>
            </div>
            
           
            <button type = 'button' onClick={props.SignOut} className = 'nav-button'>Sign Out</button>
        
            <hr />
                <div>
                    <NavLink to='/addtravels'>Add new travels</NavLink>
                </div>
                <div>
                    <NavLink to='/mytravels'>My profile</NavLink>
                </div>
                <div>
                    <NavLink to='/statistics'>Statistics of travels</NavLink>
                </div>
                </nav>
              </div>
          :  <nav> 
          <div>
              <NavLink to='/'>Home</NavLink>
          </div>
          <div>
              <NavLink to='/countries'>Countries</NavLink>
          </div>
          <div>
              <NavLink to='/languagies'>Languagies</NavLink>
          </div>
          <div>
              <NavLink to='/regions'>Regions</NavLink>
          </div>
          <div>
              <NavLink to='/populationrank'>Rank of countries in descending order of population</NavLink>
          </div>
          <div>
              <NavLink to='/signup'>Sign Up</NavLink>
          </div>
       
          <div>
              <NavLink to='/signin'>Sign In</NavLink>
          </div>

          
      </nav>
      )
}
export default NavBar;
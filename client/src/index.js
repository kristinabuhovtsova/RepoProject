import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './components/Home';
import Countries from './components/Countries';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter } from 'react-router-dom';
import Country from './components/CountryDetails'
import Languagies from './components/Languagies'
import Language from './components/Language'
import Regions from './components/Regions'
import Region from './components/Region'
import Population from './components/Population'
import { Provider } from 'react-redux'
import  store from './store'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

import MyTravels from './components/AddNewTravels'
import NavBarContainer from './components/NavBarContainer';
import StatisticsContainer from './components/StatisticsContainer';
import ProfileContainer from './components/ProfileContainer';
import ChangeNameContainer from './components/ChangeNameContainer';


ReactDOM.render((
    <Provider store = {store}>
    <BrowserRouter>
        <div className='container-fluid full-height'>
        <header> <h1 style={{margin:0}}>T r a v e l l e r s</h1><div className='globus' style={{backgroundImage: 'url(http://pngimg.com/uploads/globe/globe_PNG59.png)'}}></div></header>
        <div className='row'>
        <div className= 'col-3'>
        <NavBarContainer />
        </div>
        <Route exact path='/' component= {Home} />

        <Route exact path='/countries' component = {Countries} /> 
        <Route path='/countries/:name' component={Country}/>

        <Route exact path='/languagies' component={Languagies} />
        <Route path='/languagies/:name' component={Language} />

        <Route exact path='/regions' component={Regions} />
        <Route path='/regions/:name' component={Region} />

        <Route path='/populationrank' component={Population}/>

        <Route path = '/signup' component = {SignUp} />
        <Route path = '/signin' component = {SignIn} />

        <Route path = '/addtravels' component = {MyTravels} />
        <Route path = '/mytravels' component = {ProfileContainer} />
        <Route path = '/statistics' component = {StatisticsContainer} />

        <Route path='/changename' component = {ChangeNameContainer}/>
        </div>
        </div>
    </BrowserRouter>
    </Provider>
    
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import MyProfile from './components/MyProfile'
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

it("correct render of profile", () => {
    const statist=[{username: 'john13', usercountry: 'Canada', viscountries: ['Japan', 'Italy', 'Sweeden'] },
    {username: 'frank13', usercountry: 'Canada', viscountries: ['France', 'Albania'] }
]
    const tree = renderer
          .create(  <BrowserRouter><MyProfile in={1} stat={statist} username={'john13'}/></BrowserRouter>)
          .toJSON();
        expect(tree).toMatchSnapshot(); 
});


import changeStatReducer from "./reducers/changeStatReducer";

const initialstate= [{username: 'john13',
usercountry: 'Andorra', viscountries: ['Italy']} , {username: 'frank13',
usercountry: 'Belgium', viscountries: ['France','Sweeden']}]

it('change when adding travel to existing user is correct', () => {
  const action = {
    type: 'CHANGE_STAT',
    username: 'john13',
    usercountry: 'Andorra',
    viscountries: ['Italy', 'Sweeden']}
    const expectnewstate=  [{username: 'john13',
    usercountry: 'Andorra', viscountries: ['Italy', 'Sweeden']} , {username: 'frank13',
    usercountry: 'Belgium', viscountries: ['France', 'Sweeden']}]
   let newstate=changeStatReducer(initialstate, action)
   expect(newstate).toEqual (expectnewstate)
});

it('change when adding new user`s travels is correct', () => {
  const action = {
    type: 'CHANGE_STAT',
    username: 'mark13',
    usercountry: 'Peru',
    viscountries: ['Argentina']}
    const expectnewstate=  [{username: 'john13',
    usercountry: 'Andorra', viscountries: ['Italy']} , {username: 'frank13',
    usercountry: 'Belgium', viscountries: ['France','Sweeden']}, {username: 'mark13',
    usercountry: 'Peru', viscountries: ['Argentina']}]
   let newstate=changeStatReducer(initialstate, action)
   expect(newstate).toEqual (expectnewstate)
});

it('deletting user is correct', () => {
  const action = {
    type: 'DELETE',
    username: 'john13'}
    const expectnewstate=  [{username: 'frank13',
    usercountry: 'Belgium', viscountries: ['France','Sweeden']}]
   let newstate=changeStatReducer(initialstate, action)
   expect(newstate).toEqual (expectnewstate)
});

it('changing of name user is correct', () => {
  const action = {
    type: 'CHANGE_NAME',
    oldname:'john13',
    newname: 'mark13',
    usercountry: 'Andorra'}
    const expectnewstate=  [{username: 'mark13',
    usercountry: 'Andorra', viscountries: ['Italy']} , {username: 'frank13',
    usercountry: 'Belgium', viscountries: ['France','Sweeden']}]
   let newstate=changeStatReducer(initialstate, action)
   expect(newstate).toEqual (expectnewstate)
});
import signInOutReducer from './reducers/sigInOutReducer'

it('change when sign in is correct', () => {
  let initialstate= {in :0} 
  const action = {
    type: 'SIGN_IN', 
    result: 1, 
    username: 'john13',
    count: 'Andorra'}
    const expectnewstate= {in: 1, username: 'john13',
    country: 'Andorra'}
   let newstate=signInOutReducer (initialstate, action)
   expect(newstate).toEqual (expectnewstate)
});

it('change when sign out is correct', () => {
  let initialstate= {in: 1, username: 'john13',
  country: 'Andorra'} 
  const action = {
    type: 'SIGN_OUT', 
    result: 0}
    const expectnewstate= {in: 0}
   let newstate=signInOutReducer (initialstate, action)
   expect(newstate).toEqual (expectnewstate)
});


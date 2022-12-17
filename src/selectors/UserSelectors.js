export const getUser = (state) => {
  console.log('state', state)
  return Object.keys(state.user).length > 0 ? state.user : null;


};

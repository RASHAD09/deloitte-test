export const getUser = (state) => {
  return Object.keys(state.user).length > 0 ? state.user : null;


};
// return the data of user if there is data or empty{}
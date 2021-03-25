export const token = (state) => {
    return state.token;
}
export const userName = (state) => {
    return state.user.name;
}
export const isLoggedIn = (state) =>{
  return state.token !== null;
}

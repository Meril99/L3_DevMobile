export function LOGIN(state, token){
  state.token = token
}

export function LOGOUT(state){
  state.token = null
}

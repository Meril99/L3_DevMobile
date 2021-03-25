export function LOGIN(state, token){
  state.token = token
}

export function LOGOUT(state){
  state.token = null
<<<<<<< HEAD
  state.user = {
    id: 0,
    name: " ",
    email: " ",
    email_verified_at: null,
    created_at: " ",
    updated_at: " " }

}

export function SET_USER(state, data){
  state.user = data
  console.log(state.user)
}

export function RegisterReponse(state, response){
  alert("votre nous compte et enregistrer, maintenant vous pouvez vous connecter")
  if(response.length == 1){
    state.message = response.message
    console.log(state.message)
  }
=======
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
}

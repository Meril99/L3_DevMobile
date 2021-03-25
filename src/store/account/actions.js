import axios from "axios";

  export function  login({commit}, data){
    console.log("ok")
    axios.post('http://138.68.74.39/api/login?',null, {params:{
      email: data.email,
      password: data.password,
    }})
    .then(response => {
        const token = response.data.token
        localStorage.setItem('token', token)
        commit('LOGIN', token)
      })
      .catch(error =>{
        console.log("error: "+error)
<<<<<<< HEAD
        if(error == "Error: Request failed with status code 401"){
          alert("email ou mot de passe incorrect ")
        }
=======
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
      })
   }

 export function logout ({commit}){
   localStorage.removeItem('token')
   commit('LOGOUT')
 }

<<<<<<< HEAD
 export function register ({commit}, data){
=======
 export function register (context, data){
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563
    return  axios.post('http://138.68.74.39/api/register', null, {params:{
      name: data.name,
      email: data.email,
      password: data.password,
    }})
    .then(response => {
<<<<<<< HEAD
      commit("RegisterReponse", response)
    })
    .catch(error =>{
      console.log(error.response.data)
      if(error.response.data.message == "cet email est déjà utilisé"){
        alert("cet email est déjà utilisé")
      }
      if(error.response.data.errors == "The name field is required."){
        alert("vous n'avez pas rempli le nom")
      }
      if(error.response.data.errors == "The email field is required."){
        alert("vous n'avez pas rempli le email")
      }
      if(error.response.data.errors == "The name field is required."){
        alert("vous n'avez pas rempli le mot de passe")
      }
      if(error.response.data.errors == "The password must be at least 6 characters."){
        alert("mot de pass doit être au moin 6 caractère")
      }
    })

}

export function getUser({commit}, token){
  axios.get('http://138.68.74.39/api/user', {
    headers:{
      Authorization : 'Bearer ' + token
    }
  })
  .then(response=>{
    commit('SET_USER',response.data)
  })
}
=======
      console.log(response.data.token)
    })
    .catch(error =>{
      console.log(error.response.data)
    })

}
>>>>>>> 9243d71cc8141299355f1a3d72fdd74dc6da4563

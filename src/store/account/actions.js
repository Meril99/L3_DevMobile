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
      })
   }

 export function logout ({commit}){
   localStorage.removeItem('token')
   commit('LOGOUT')
 }

 export function register (context, data){
    return  axios.post('http://138.68.74.39/api/register', null, {params:{
      name: data.name,
      email: data.email,
      password: data.password,
    }})
    .then(response => {
      console.log(response.data.token)
    })
    .catch(error =>{
      console.log(error.response.data)
    })

}

import axios from "axios";

  export function  retrieveToken({commit}, credentials ){
    axios.post('http://138.68.74.39/api/login?email=toto@toto.com&password=totototo', {
        username: credentials.username,
        password: credentials.password,
    })
        .then(response => {
            const token = response.data.acces_token
            localStorage.setItem('access_token', token)
            commit('retrieveToken', token)
        })
   }
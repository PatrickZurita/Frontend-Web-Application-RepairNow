import axios from 'axios'

export class usersServices {

  register = (email,password,firstName,lastName) => {
    return axios.post("http://localhost:3000/register",{
      email,
      password,
      firstName,
      lastName
    })
  }

  login = (email,password) =>{
    return axios.post("http://localhost:3000/login",
      {
        email,
        password
      })
  }
}


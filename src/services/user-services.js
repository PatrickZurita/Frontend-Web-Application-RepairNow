import axios from 'axios'

const httpSignal=axios.create(
    {
    baseURL:"http://localhost:3000/660/",
    headers:{
        "Authorization": "Bearer "+ sessionStorage.getItem("jwt")
    }
})

export class usersServices {

  getUserInformation=()=>{
    return httpSignal.get("users")
  }

  register = (email,password,firstName,lastName,type) => {
    return axios.post("http://localhost:3000/register",{
      email,
      password,
      firstName,
      lastName,
      type
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

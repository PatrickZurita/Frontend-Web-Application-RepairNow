import axios from 'axios'

const httpSignal=axios.create(
  {baseURL:"http://localhost:3000/660/"})


export class usersServices {

  getUserInformation=()=>{
    return httpSignal.get("users")
  }

  getUserInformationById=(id)=>{
    return httpSignal.get("/users/"+id, 
    { headers: {"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}});
  }

  register = (email,password,firstName,lastName,address,phone,type) => {
    return axios.post("http://localhost:3000/register",{
      email,
      password,
      firstName,
      lastName,
      address,
      phone,
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


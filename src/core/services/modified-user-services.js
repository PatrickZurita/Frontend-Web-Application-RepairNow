import axios from 'axios'

export class ModifiedUserServices{

  modifyUser(id,firstName,lastName,address,phone,email,password){
    return axios.patch('http://localhost:3000/660/users/'+id,
      {
        firstName,
        lastName,
        address,
        phone,
        email,
        password
      }
      , { headers: {"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}}
    )
  }


}

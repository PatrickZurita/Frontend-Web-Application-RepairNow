import axios from "axios";

export class clientServices{

  patchPlan=(id,plan)=>{
    return axios.patch('http://localhost:3000/660/users/'+id.toString(),{
      plan
    },{headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

}
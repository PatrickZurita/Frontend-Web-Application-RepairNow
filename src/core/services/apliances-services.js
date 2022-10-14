import axios from 'axios'

const httpSignal=axios.create(
    {
    baseURL:"http://localhost:3000/660/",
    headers:{
      "Authorization": "Bearer "+ sessionStorage.getItem("jwt")
    }
})

export class appliancesServices {

    getAppliancesInformation=()=>{
      return httpSignal.get("appliances")
    }

    getApplianceWithId=(id)=>{
      return httpSignal.get("appliances/"+id)
    }
    

}
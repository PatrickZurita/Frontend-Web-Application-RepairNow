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

    postNewAppliance=(name,description,brand,model,year,urlImage,insuranceDate,clientId)=>{
      return axios.post('http://localhost:3000/660/appliances',{
        name,
        description,
        brand,
        model,
        year,
        urlImage,
        insuranceDate,
        clientId
      },{headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
    }

    patchAppliance=(id,name,description,brand,model,year,urlImage,insuranceDate)=>{
      return axios.patch('http://localhost:3000/660/appliances/'+id.toString(),{
        name,
        description,
        brand,
        model,
        year,
        urlImage,
        insuranceDate,
      },{headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
    }
    

}
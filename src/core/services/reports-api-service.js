import axios from 'axios'

export class reportsServices {

  getReportsInformation=()=>{
    return axios.get('http://localhost:3000/660/reports',
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  getReportWithId=(id)=>{
    return axios.get('http://localhost:3000/660/reports/'+id,
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  modifyReport(id,observation,diagnosis,repairDescription,date){
    return axios.patch('http://localhost:3000/660/reports/'+id,
      {
        observation,
        diagnosis,
        repairDescription,
        date
      }
      , { headers: {"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}}
    )
  }

}
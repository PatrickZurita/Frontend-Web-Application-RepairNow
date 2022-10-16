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

}
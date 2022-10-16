import axios from 'axios'

export class appointmentsServices {

  getAppointmentsInformation=()=>{
    return axios.get('http://localhost:3000/660/appointments',
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  getAppointmentWithId=(id)=>{
    return axios.get('http://localhost:3000/660/appointments/'+id,
      {headers:{"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}})
  }

  modifyAppointment(id,dateReserve,dateAttention,hour){
    return axios.patch('http://localhost:3000/660/appointments/'+id,
      {
        dateReserve,
        dateAttention,
        hour
      }
      , { headers: {"Authorization": "Bearer "+ sessionStorage.getItem("jwt")}}
    )
  }


}
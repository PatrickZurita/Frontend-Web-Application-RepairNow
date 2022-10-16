export const getAppointmentsOfUserId=(id,data)=>{
  let clientAppointments=[]
  for(const object of data){
    const {clientId}=object
    if(clientId===Number(id))clientAppointments.push(object)
  }
  return clientAppointments

}
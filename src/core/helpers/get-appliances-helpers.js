export const getAppliancesOfUserId=(id,data)=>{
  let clientAppliances=[]
  for(const object of data){
    const {clientId}=object
    if(clientId===Number(id))clientAppliances.push(object)
  }
  return clientAppliances

}
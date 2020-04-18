export const newPickup = pickup => {
    const data = {
       phoneNo: pickup.phoneNo,
       time: pickup.time,
       address: pickup.address
    };
 
    return fetch('http://collector.ceykod.com/api/v1/newPickup/', {
       method: 'POST',
       headers: {},
       body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(response => {
       return response;
    })
    .catch(err => {
       console.log(err)
    })
 }
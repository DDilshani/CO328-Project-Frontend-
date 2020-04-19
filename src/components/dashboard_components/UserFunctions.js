export const newPickup = pickup => {
   let userToken = localStorage.usertoken;
   let bearer = 'Bearer ' + userToken;

    const data = {
      userPhone: pickup.phoneNo,
      timeslot: pickup.time,
      address: pickup.address,
      datatime: pickup.date,
    };
 
    return fetch('http://collector.ceykod.com/api/v1/pickups/new/', {
      method: 'POST',
      headers: {
         'Authorization': bearer,
      },
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

export const getUserData = () => {
   let userToken = localStorage.usertoken;
   let bearer = 'Bearer ' + userToken;
   return fetch('http://collector.ceykod.com/api/v1/getUserData/', {
      method: 'GET',
      headers: {
         'Authorization': bearer,
      }
   })
   .then((response) => response.json())
   .then(response => {
      return response;
   })
   .catch(err => {
      console.log(err)
   })
}

export const getListItems = () => {
   let userToken = localStorage.usertoken;
   let bearer = 'Bearer ' + userToken;
   return fetch('http://collector.ceykod.com/api/v1/pickups/list', {
      method: 'GET',
      headers: {
         'Authorization': bearer,
      }
   })
   .then((response) => response.json())
   .then(response => {
      return response;
   })
   .catch(err => {
      console.log(err)
   })
}

export const ratePickup = pickup => {
   let userToken = localStorage.usertoken;
   let bearer = 'Bearer ' + userToken;

    const data = {
      pickupId: pickup.pickupId,
      rate: pickup.rate,
    };
 
    return fetch('http://collector.ceykod.com/api/v1/pickups/rate/', {
      method: 'POST',
      headers: {
         'Authorization': bearer,
      },
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

export const deletePickup = pickup => {
   let userToken = localStorage.usertoken;
   let bearer = 'Bearer ' + userToken;

    const data = {
      pickupId: pickup.pickupId,
    };
 
    return fetch('http://collector.ceykod.com/api/v1/pickups/delete/', {
      method: 'POST',
      headers: {
         'Authorization': bearer,
      },
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
import * as API from "./url";

export const RoleFetcher = (token,callback) => {
    fetch(API.ROLE, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Authorization":`Bearer ${token}`
      },
      cache: "no-cache"
    })
      .then(response => {
        if (response.status === 200) {
          // console.log(response);
          return response.json();
        }
      })
      .then(data => {
        console.log(data);
  
        callback(null, data);
      })
      .catch(err => console.log(err));
  };
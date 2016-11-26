import {appID, appSecret, serviceBaseUrl} from './api.js';
import $ from '../../node_modules/jquery/dist/jquery.min';
function errorHandler(response) {
  let errorMessage = JSON.stringify(response);
  if (response.readyState === 0) {
    errorMessage = 'Cannot connect due to network error.';
  }
  if (response.responseJSON && response.responseJSON.description) {
    errorMessage = response.responseJSON.description;
  }
  console.log(errorMessage);
  return errorMessage;
}
function successHandler(response) {
  sessionStorage.setItem('authToken', response._kmd.authtoken);
  console.log('success');
  return response
}
export let BaseUserManagement = {
  login: (e) => {
    e.preventDefault();
    // let body = JSON.stringify({
    //   username: e.target[0].value,
    //   password: e.target[1].value
    // });
    // fetch(serviceBaseUrl + "user/" + appID + '/login', {
    //   method: 'POST',
    //   headers: {
    //     "Authorization": "Basic " + btoa(appID + ':' + appSecret),
    //     "Content-Type": "application/json"
    //   },
    //   body: body
    // }).then((res) => {
    //      res.json().then((data)=>{
    //        sessionStorage.setItem('authToken', data._kmd.authtoken);
    //      })
    //
    // })
    // .catch((err) => {
    //   console.log(err.json())
    // });
    $.ajax({
      method: "POST",
      url: serviceBaseUrl + "user/" + appID + '/login',
      headers: {"Authorization": "Basic " + btoa(appID + ':' + appSecret)},
      data: {
        username: e.target[0].value,
        password: e.target[1].value
      },
      success: successHandler,
      error: errorHandler
    });

  },
  register: (e) => {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: serviceBaseUrl + "user/" + appID + '/',
      data: {
        username: e.target[0].value,
        password: e.target[3].value,
        email: e.target[1].value
      },
      headers: {"Authorization": "Basic " + btoa(appID + ':' + appSecret)},
      success: successHandler,
      error: errorHandler
    });

  },
  logout: () => {
    $.ajax({
      method: "POST",
      url: serviceBaseUrl + "user/" + appID + '_logout',
      headers: {"Authorization": "Kinvey " + sessionStorage.clear()},
      success: successHandler,
      error: errorHandler
    });
  },
  checkForExistingUser: (checkUserName) => {
    $.ajax({
      method: "POST",
      url: serviceBaseUrl + "rpc/" + appID + '/check-username-exists',
      headers: {"Authorization": "Basic " + btoa(appID + ':' + appSecret)},
      data: {
        "username": checkUserName
      },
      success: successHandler,
      error: errorHandler
    });
    /*{
     "usernameExists": "false" or "true"
     }*/
  }
};


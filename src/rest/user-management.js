import {appID, appSecret, serviceBaseUrl} from './api.js';
import $ from '../../node_modules/jquery/dist/jquery.min'
function handleAjaxError(response) {
    let errorMessage = JSON.stringify(response);
    if (response.readyState === 0) {
        errorMessage = 'Cannot connect due to network error.';
    }
    if (response.responseJSON && response.responseJSON.description) {
        errorMessage = response.responseJSON.description;
    }
    return errorMessage;
}
function successHandler(response) {
     console.log(response);
}
export let BaseUserManagement = {
    login:  (userData) => {
        $.ajax({
            method: "POST",
            url: serviceBaseUrl + "user/" + appID + '/login',
            headers: {"Authorization": "Basic " + btoa(appID + ':' + appSecret)},
            data: {
                username: userData.username,
                password: userData.password
            },
            success: successHandler,
            error: handleAjaxError
        });
    },
    register: (userData)=> {
        $.ajax({
            method: "POST",
            url: serviceBaseUrl + "user/" + appID + '/',
            data: {
                username: userData.username,
                password: userData.password
            },
            headers: {"Authorization": "Basic " + btoa(appID + ':' + appSecret)},
            success:  (response) => {
                let userAuth = response._kmd.authtoken;
                sessionStorage.setItem('authToken', userAuth);
            },
            error: handleAjaxError
        });
    },
    logout: () => {
        $.ajax({
            method: "POST",
            url: serviceBaseUrl + "user/" + appID + '_logout',
            headers: {"Authorization": "Kinvey " + sessionStorage.clear()},
            success: successHandler,
            error: handleAjaxError
        });

    },
};


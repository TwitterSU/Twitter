import $ from '../../../node_modules/jquery/dist/jquery.min.js'
import { api } from '../api.js'
const url = api.serviceBaseUrl + 'appdata/' + api.appID + '/'
const authHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
export const retrive = function(col,e){
  return $.ajax({
    method: 'GET',
    url: url + col,
    headers: authHeaders
  })
}
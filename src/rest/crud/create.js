import $ from '../../../node_modules/jquery/dist/jquery.min'
import { api } from '../api.js'
const url = api.serviceBaseUrl + 'appdata/' + api.appID + '/'
const authHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
import { handlers } from '../handlers'
export let create = (e)=> {
  e.preventDefault()
  let post = {
    content: e.target[0].value,
    author: sessionStorage.getItem('username')
  }
  $.ajax({
    method: 'POST',
    url: url + 'posts',
    headers: authHeaders,
    data: post,
    success: handlers.successHandler,
    error: handlers.errorHandler
  })
}
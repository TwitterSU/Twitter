import { appID, appSecret, serviceBaseUrl } from '../api.js'
import $ from '../../../node_modules/jquery/dist/jquery.min.js'
const url = serviceBaseUrl + 'appdata/' + appID + '/'
const authHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}

export let crud = {
  create: (collection) => {
    let post = {
      author: 'get author from props',
      content: 'Post content'
    }

    $.ajax({
      method: 'POST',
      url: url + collection,
      headers: authHeaders,
      data: post

    })
  },
  retrive: (e, collection) => {
    $.ajax({
      method: 'GET',
      url: url + collection,
      headers: authHeaders

    })
  },
  update: (collection, changedFields, entityId) => {
    $.ajax({
      method: 'PUT',
      url: url + collection + '/' + entityId,
      headers: authHeaders,
      contentType: 'application/json',
      data: changedFields

    })
  },
  delete: (collection, entityId) => {
    $.ajax({
      method: 'DELETE',
      url: url + collection + '/?query=' + entityId,
      headers: authHeaders,
      contentType: 'application/json'

    })
  }
}

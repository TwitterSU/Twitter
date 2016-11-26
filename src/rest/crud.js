import { appID, appSecret, serviceBaseUrl } from './api.js'
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
      data: post,
      success: postCreateSuccess,
      error: errorHandler
    })
  },
  get: (collection) => {
    $.ajax({
      method: 'GET',
      url: url + collection,
      headers: authHeaders,
      success: loadPostsSuccess,
      error: errorHandler
    })
    function loadPostsSuccess (data) {
      // TODO render data
    }
  },
  update: (collection, changedFields, entityId) => {
    $.ajax({
      method: 'PUT',
      url: url + collection + '/' + entityId,
      headers: authHeaders,
      contentType: 'application/json',
      data: changedFields,
      success: loadPostsSuccess,
      error: errorHandler
    })
  },
  delete: (collection, entityId) => {
    $.ajax({
      method: 'DELETE',
      url: url + collection + '/?query=' + entityId,
      headers: authHeaders,
      contentType: 'application/json',
      success: loadPostsSuccess,
      error: errorHandler
    })
  }
}

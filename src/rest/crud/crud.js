import { api } from '../api.js'
import $ from '../../../node_modules/jquery/dist/jquery.min.js'
const KinveyRequests = (function () {
  const url = api.serviceBaseUrl + 'appdata/' + api.appID + '/'
  const authHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
  function create(collection,e,value) {
    let post;
    if(e){
      e.preventDefault()
      post = {
        content: e.target[0].value,
        tags: [...e.target[1].value.split(/\s{0,},\s{0,}/).filter(e=>e)],
        author: sessionStorage.getItem('username')
      }
    }
    else {
      post = {
        content: value.content,
        postId: value.postId,
        userId: sessionStorage.getItem('userId'),
        author: sessionStorage.getItem('username')
      }
    }

    return $.ajax({
      method: 'POST',
      url: url + collection,
      headers: authHeaders,
      data: post
    })
  }
  function retrieve(collection) {
    return $.ajax({
      method: 'GET',
      url: url + collection,
      headers: authHeaders,
    })

  }
  function update(entityId,content) {
    return $.ajax({
      method: 'PUT',
      url: url +  'posts/' + entityId,
      headers: authHeaders,
      contentType: 'application/json',
      data: content,
    })
  }
  function remove(collection, entityId)  {
    return $.ajax({
      method: 'DELETE',
      url: url +  collection+'/' + entityId,
      headers: authHeaders,
      contentType: 'application/json',

    })
  }
  return {
    create,
    retrieve,
    update,
    remove
  }
})()
export default KinveyRequests;
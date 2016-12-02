import { api } from '../api.js'
import $ from '../../node_modules/jquery/dist/jquery.min.js'
let url = api.serviceBaseUrl + 'appdata/' + api.appID + '/'

function getHeaders () {
  return {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
}
const KinveyRequester = (function () {
  function create (collection, e, value) {
    let text = e.target[0].value.split(' ')
    let tags = []
    text.map(word => {
      if (word[0] == '#') {
        tags.push(word)
      }
    })
    console.log(tags)
    let post
    if (e) {
      e.preventDefault()
      post = {
        content: e.target[0].value,
        tags: tags,
        author: sessionStorage.getItem('username'),
        likes: 0,
        isLiked: null
      }
    } else {
      post = {
        content: value.content,
        postId: value.postId,
        userId: sessionStorage.getItem('userId'),
        author: sessionStorage.getItem('username'),
        authorURL: sessionStorage.getItem('url')
      }
    }
    e.target[0].value = ''
    e.target[1].value = ''
    return $.ajax({
      method: 'POST',
      url: url + collection,
      headers: getHeaders(),
      data: post
    })
  }

  function retrieve (collection) {
    return $.ajax({
      method: 'GET',
      url: url + collection,
      contentType: 'application/json',
      headers: getHeaders()
    })
  }
  function update (entityId, content) {
    return $.ajax({
      method: 'PUT',
      url: url + 'posts/' + entityId,
      headers: getHeaders(),
      contentType: 'application/json',
      data: JSON.stringify(content)
    })
  }
  function remove (collection, entityId) {
    return $.ajax({
      method: 'DELETE',
      url: url + collection + '/' + entityId,
      headers: getHeaders(),
      contentType: 'application/json'

    })
  }

  return {
    create,
    retrieve,
    update,
  remove}
})()
export default KinveyRequester

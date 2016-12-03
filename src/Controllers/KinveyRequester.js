import { api } from '../api.js'
import $ from '../../node_modules/jquery/dist/jquery.min.js'
let url = api.serviceBaseUrl + 'appdata/' + api.appID + '/'

function getHeaders () {
  return {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
}
const KinveyRequester = (function () {
  function create (collection, e,value) {
    let text
    let tags = []
    let post
    if (e) {
      text = e.target[0].value.split(' ')
      text.map(word => {
        if (word[0] == '#') {
          tags.push(word)
        }
      })
      e.preventDefault()
      post = {
        content: e.target[0].value,
        tags: tags,
        author: sessionStorage.getItem('username'),
        likes: 0,
        comments: [null],
        isLiked: 'admin, ',
        avatarUrl: sessionStorage.getItem('url')
      }
      e.target[0].value = ''
    } else {
      post = {
        content: value.content,
        postId: value.postId,
        userId: sessionStorage.getItem('userId'),
        author: sessionStorage.getItem('username'),
        authorURL: sessionStorage.getItem('url')
      }
    }

    return $.ajax({
      method: 'POST',
      url: url + collection,
      headers: getHeaders(),
      data: post
    })
  }
  function createComment (e, value) {
      console.log(e)
      console.log(value)
      
      let post = {
        commentText: value.text,
        postId: value.postId,
        author: sessionStorage.getItem('username'),
        avatarUrl: sessionStorage.getItem('url')
      }

    return $.ajax({
      method: 'POST',
      url: url + 'comments',
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
  function update (collection, entityId, content) {

    return $.ajax({
      method: 'PUT',
      url: url + collection + '/' + entityId,
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
  function getCommentsByPostId(postId) {
    return $.ajax({
      method: 'GET',
      url: url + 'comments/' + '?query=' + JSON.stringify({postId: postId}),
      headers: getHeaders(),
    })
  }
  return {
    create,
    retrieve,
    update,
    remove,
    getCommentsByPostId,
    createComment}
})()
export default KinveyRequester

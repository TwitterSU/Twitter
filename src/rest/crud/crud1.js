// import { api } from '../api.js'
// import $ from '../../../node_modules/jquery/dist/jquery.min.js'
// const crud = (function () {
//   const url = api.serviceBaseUrl + 'appdata/' + api.appID + '/'
//   const authHeaders = {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
//   function createTweet(target) {
//     let post = {
//       content: target.target[0].value,
//       tags: [...target.target[1].value.split(',')],
//       author: sessionStorage.getItem('username')
//     }
//     return $.ajax({
//       method: 'POST',
//       url: url + 'posts',
//       headers: authHeaders,
//       data: post
//     })
//   }
//   function getTweets() {
//     return $.ajax({
//       method: 'GET',
//       url: url + 'posts',
//       headers: authHeaders,
//     })
//
//   }
//   function updateTweet(entityId,content) {
//     return $.ajax({
//       method: 'PUT',
//       url: url +  'posts/' + entityId,
//       headers: authHeaders,
//       contentType: 'application/json',
//       data: content,
//     })
//   }
//   function deleteTweet(entityId)  {
//     return $.ajax({
//       method: 'DELETE',
//       url: url +  'posts/' + entityId,
//       headers: authHeaders,
//       contentType: 'application/json',
//
//     })
//   }
//   return {
//     createTweet,
//     getTweets,
//     updateTweet,
//     deleteTweet
//   }
// })()
// export default crud;
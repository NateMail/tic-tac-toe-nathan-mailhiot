const store = require('./store')

const signUpSuccess = function (data) {
  $('.up').text('You successfully signed up!')
  console.log('sign up success ran with the data: ', data)
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('.up').text('Something went wrong. Try again!')
  console.log('sign up failure ran with the data: ', data)
}

const signInSuccess = function (data) {
  $('.login').text('You logged in successfully!')
  console.log('sign in success ran with the data: ', data)
  store.user = data.user
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('.login').text('Something went wrong try again.')
  console.log('sign in failure ran with the data: ', data)
}

const changePasswordSuccess = function (data) {
  $('.change').text('You changed your password successfully')
  console.log('password change success ran with the data: ', data)
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('.change').text('Something went wrong try again.')
  console.log('password change failure ran with the data: ', data)
}

const signOutSuccess = function () {
  console.log('Sign out successful')
  $('form').trigger('reset')
  store.user = null
}

const signOutFailure = function () {
  console.log('Sign out failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}

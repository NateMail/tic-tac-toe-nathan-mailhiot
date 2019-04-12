const store = require('./../store.js')

const signUpSuccess = function (data) {
  $('.up').show()
  // sign up message successful
  $('.up').text('You successfully signed up!')
  // sign up message hidden
  setTimeout(function () {
    $('.up').text('')
  }, 2000)
  // resets the form
  $('form').trigger('reset')
}

const signUpFailure = function (data) {
  $('.up').show()
  $('.up').text('Something went wrong. Try again!')
  setTimeout(function () {
    $('.up').text('')
  }, 2000)
  $('form').trigger('reset')
}

const signInSuccess = function (data) {
  // show log in message
  $('.login').show()
  // login successful message
  $('.login').text('You logged in successfully!')
  // login message hidden
  $('.login').hide(2000)
  // signup and sign in form hidden
  $('#signInandUp').hide(2000)
  // sign out button revealed
  $('#sign-out').removeClass('signingOut')
  // new game button class is removed and the button is revealed
  $('#newG').removeClass('newGame')
  $('#newG').show()
  // game stats button class is removed and button is revealed
  $('#gS').removeClass('gameStats')
  $('#gS').show()
  // change password class is removed and it is revealed
  $('#change-password').removeClass('passwordChange')
  // to show the button after sign out has been used
  $('#change-password').show()
  // board is shown after signout has been used
  $('.hideboard').show()
  // storing user data to the store
  store.user = data.user
  // shows sign-out button
  $('#sign-out').show()
  // resetting the form
  $('form').trigger('reset')
}

const signInFailure = function (data) {
  $('.login').show()
  $('.login').text('Something went wrong try again.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (data) {
  $('.change').show()
  $('.change').text('You changed your password successfully!')
  setTimeout(function () {
    $('.change').text('')
  }, 2000)
  $('form').trigger('reset')
}

const changePasswordFailure = function (data) {
  $('.change').show()
  $('.change').text('Something went wrong try again.')
  setTimeout(function () {
    $('.change').text('')
  }, 2000)
  $('form').trigger('reset')
}

const signOutSuccess = function () {
  // show sign out message
  $('.out').show()
  // sign out message
  $('.out').text('You signed out successfully!')
  // hides sign out message
  $('.out').hide(4000)
  // hides change password
  $('#change-password').hide()
  // shows sign up and sign in form
  $('#signInandUp').show()
  // resets the form
  $('form').trigger('reset')
  // hides sign out
  $('#sign-out').hide()
  // hides the board
  $('.gameboard').hide()
  // hides the number of games played on sign out
  $('#numberOfGames').hide()
  // hides password change
  $('.change').hide()
  // hides messagebox
  $('.mess').hide()
  // hides buttons
  $('#newG').hide()
  $('#gS').hide()

  store.user = null
}

const signOutFailure = function () {
  $('.out').text('Sign out failed, try again.')
  $('form').trigger('reset')
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

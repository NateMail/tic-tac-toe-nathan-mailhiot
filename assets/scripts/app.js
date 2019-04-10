'use strict'

const events = require('./events.js')
const auth = require('./auth/events.js')
const apiEvents = require('./apiEvents.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  events.addEventHandler()
  $('#sign-up').on('submit', auth.onSignUp)
  $('#sign-in').on('submit', auth.onSignIn)
  $('#change-password').on('submit', auth.onChangePassword)
  $('#sign-out').on('submit', auth.onSignOut)
  $('#newG').on('click', apiEvents.onNewGameClick)
  $('#gS').on('click', apiEvents.onGetGames)
})

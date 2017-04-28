'use strict'

const cookie = require('cookie')

const getProfile = request => {
  const parsed = request && request.headers ? cookie.parse(request.headers.cookie) : false
  let tmp = parsed.profile
  let profile = false
  if (tmp) {
    tmp = tmp.replace('"{', '{')
    tmp = tmp.replace('}"', '}')
    profile = JSON.parse(tmp)
  }
  return profile
}

module.exports = getProfile

exports.default = getProfile

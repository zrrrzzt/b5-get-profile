'use strict'

const test = require('ava')
const getProfile = require('../../index')

test('it returns false if not request', t => {
  const profile = getProfile()
  t.is(profile, false)
})

test('it returns false if no profile', t => {
  const request = {
    headers: {
      cookie: 'bim;bam;boom;balooom'
    }
  }
  const profile = getProfile(request)
  t.is(profile, false)
})

test('it returns profile', t => {
  const expected = {
    user: 'zrrrzzt',
    name: 'Geir Gåsodden'
  }
  const request = {
    headers: {
      cookie: '_ga=GA1.2.151922886.1489166378; profile=%7B%22user%22%3A%22zrrrzzt%22%2C%22name%22%3A%22Geir%20G%C3%A5sodden%22%7D'
    }
  }
  const profile = getProfile(request)

  t.truthy(profile)

  t.deepEqual(expected, profile)
})

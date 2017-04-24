[![Build Status](https://travis-ci.org/zrrrzzt/b5-get-profile.svg?branch=master)](https://travis-ci.org/zrrrzzt/b5-get-profile)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/b5-get-profile/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/b5-get-profile?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/zrrrzzt/b5-get-profile.svg)](https://greenkeeper.io/)

# b5-get-profile
Get profile from cookie.

## Usage

```JavaScript
'use strict'

const getProfile = require('b5-get-profile')
const {send} = require('micro')

module.exports = (request, response) => {
  send(response, 200, getProfile(request))
}
```

## License

[MIT](LICENSE)

![Robohash image of b5-get-profile](https://robots.kebabstudios.party/b5-get-profile.png "Robohash image of b5-get-profile")
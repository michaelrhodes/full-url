# full-url
full-url is a function that returns the full URL of a request, including the scheme and host.

[![Build status](https://travis-ci.org/michaelrhodes/full-url.png?branch=master)](https://travis-ci.org/michaelrhodes/full-url)

## Install

```
npm install full-url
```

### Example

``` js
var server = require('http').createServer
var url = require('full-url')

server(function(request, response) {
  response.end(url(request))
  // => http://localhost:1234/[whatever]
}).listen(1234)
```

### License
[MIT](http://opensource.org/licenses/MIT)

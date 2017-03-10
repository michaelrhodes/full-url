module.exports = function(request) {
  var secure = request.connection.encrypted || request.headers['x-forwarded-proto'] === 'https'
  return 'http' + (secure ? 's' : '') + '://' +
    request.headers.host +
    request.url
}

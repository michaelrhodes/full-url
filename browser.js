module.exports = function(pathname) {
  var origin = (location.origin ?
    location.origin :
    location.protocol + '//' + location.host
  )
  if (pathname[0] !== '/') {
    pathname = '/' + pathname
  }
  return origin + pathname
}

var voidElements = require('void-elements')

function Helpers () {};

Helpers.prototype.isValidFileScope = function (editor) {
  var root = editor.getRootScopeDescriptor().getScopesArray()[0].split('.')
  if (root.indexOf('html') != -1)
    return true
  return false
}

Helpers.prototype.isValidBufferScope = function (scopes) {
  var scopesArray = scopes.getScopesArray()[0].split('.')
  // Make sure we're not in inline JS, even if it's in an HTMLish file.
  if (scopesArray.indexOf('js') != -1 && scopesArray.indexOf('embedded' != -1))
    return false
  return true
}

Helpers.prototype.isVoidElement = function (tagName) {
  if(voidElements[tagName])
    return true
  return false
}

module.exports = Helpers

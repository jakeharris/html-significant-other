
function Helpers () {};

Helpers.prototype.isValidFileScope = function (editor) {
  root = editor.getRootScopeDescriptor().getScopesArray()[0].split('.')
  if (root.indexOf('html') != -1)
    return true
  return false
}

Helpers.prototype.isValidBufferScope = function (scopes) {
  return true
}

Helpers.prototype.isSelfClosingTag = function (tagName) {
  return false
}

module.exports = Helpers

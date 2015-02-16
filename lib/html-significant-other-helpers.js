
function Helpers () {};

Helpers.prototype.isValidFileScope = function (editor) {
  root = editor.getRootScopeDescriptor().getScopesArray()[0].split('.')
  console.log(root)
  if (root.indexOf('html') != -1)
    return true
  return false
}

Helpers.prototype.isValidBufferScope = function (scopes) {
  return true
}

module.exports = Helpers

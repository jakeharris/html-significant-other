
module.exports =
class Helpers

  isValidFileScope: (editor) ->
    root = editor.getRootScopeDescriptor().split('.')
    if 'html' in root
      return true
    return false

  isValidBufferScope: (scopes) ->
    return true

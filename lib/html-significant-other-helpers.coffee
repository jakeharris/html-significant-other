
module.exports =
class Helpers

  isValidFileScope: (editor) ->
    # TODO: Write this.
    root = editor.getRootScopeDescriptor().split('.')
    if 'html' in root
      return true
    return false

  isValidBufferScope: (scopes) ->
    return true

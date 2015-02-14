{CompositeDisposable} = require 'event-kit'
{Helpers} = require './html-significant-other-helpers'

module.exports =


  activate: (state) ->
    @helpers = new Helpers
    @subscriptions = new CompositeDisposable
    @subscriptions.add atom.workspaceobserveTextEditors (editor) =>
      buffer = editor.getBuffer()

      editorSubscriptions.add buffer.onDidChange (e) ->
        if e.newText is '>'
          cursor = editor.getCursorBufferPosition()
          scopes = editor.scopesForBufferPosition(cursor)


  subscribe: ->
    # TODO: Write

  deactivate: ->

  serialize: ->

  toggle: ->

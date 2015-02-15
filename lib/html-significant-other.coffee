{CompositeDisposable} = require 'event-kit'
{Helpers} = require './html-significant-other-helpers'

module.exports =


  activate: (state) ->
    @helpers = new Helpers
    @subscriptions = new CompositeDisposable
    @subscriptions.add atom.workspace.observeTextEditors (editor) =>
      buffer = editor.getBuffer()

      editorSubscriptions.add buffer.onDidChange (e) ->
        if e.newText is '>'
          if @helpers.isValidFileScope (editor)
            console.log('made it!')
            cursor = editor.getCursorBufferPosition()
            if @helpers.isValidBufferScope cursor.getScopeDescriptor()




  subscribe: ->
    # TODO: Write this.

  deactivate: ->

  serialize: ->

  toggle: ->

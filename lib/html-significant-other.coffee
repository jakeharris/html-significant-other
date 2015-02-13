module.exports =

  activate: ->
    atom.commands.add 'atom-workspace', "html-significant-other:test", => @test()

  test: ->
    # This assumes the active pane item is an editor
    editor = atom.workspace.getActivePaneItem()
    editor.insertText('Hello, world!')

  deactivate: ->

  serialize: ->

  toggle: ->

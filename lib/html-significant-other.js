var CompositeDisposable = require('event-kit').CompositeDisposable,
    Helpers = require('./html-significant-other-helpers')


atom.notifications.addSuccess('significant-other loaded!', { dismissable: true })

module.exports = {

  activate: function (state) {
    atom.notifications.addSuccess('significant-other activated!', { dismissable: true })
    this.helpers = new Helpers
    this.subscriptions = new CompositeDisposable
    this.subscriptions.add(atom.workspace.observeTextEditors((function (_this) {
      return function(editor) {
        buffer = editor.getBuffer()

        var editorSubscriptions = new CompositeDisposable

        editorSubscriptions.add(buffer.onDidChange(function (e) {
          atom.notifications.addSuccess('significant-other entered editor subscription!', {dismissable: true})
          if (e.newText == '>') {
            if(this.helpers.isValidFileScope(editor)) {
              atom.notifications.addError('significant-other noticed we were in a valid file scope!', { dismissable: true })
              cursor = editor.getCursorBufferPosition()
              if (this.helpers.isValidBufferScope(cursor.getScopeDescriptor())) {

              }
            }
          }
        }))

        editorSubscriptions.add(buffer.onDidDestroy(function (e) {
          editorSubscriptions.dispose()
        }))

        _this.subscriptions.add(editorSubscriptions)
      };
    })(this)))
  },

  subscribe: function () {},
    // TODO: Write this.

  deactivate: function () {
    this.subscriptions.dispose()
  },

  serialize: function () {},

  toggle: function () {}
}

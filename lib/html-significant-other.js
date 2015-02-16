var CompositeDisposable = require('event-kit').CompositeDisposable,
    Point = require('text-buffer').Point,
    Helpers = require('./html-significant-other-helpers')

module.exports = {

  activate: function (state) {
    var helpers = new Helpers()
    this.subscriptions = new CompositeDisposable
    this.subscriptions.add(atom.workspace.observeTextEditors((function (_this) {
      return function(editor) {
        buffer = editor.getBuffer()

        var editorSubscriptions = new CompositeDisposable

        editorSubscriptions.add(buffer.onDidChange(function (e) {
          if (e.newText == '>') {
            if(helpers.isValidFileScope(editor)) {
              cursor = editor.getCursorBufferPosition()
              if (helpers.isValidBufferScope(editor.scopeDescriptorForBufferPosition(cursor))) {
                var selection,
                    tag = '',
                    openingAngleBracketIndex,
                    regexp = new RegExp("(<[a-zA-Z]+(>|.*?[^?]>))*<[a-zA-Z]+(>|.*?[^?]>)"),
                    matches

                editor.selectToBeginningOfLine()
                selection = editor.getSelectedText()

                // Check text between the > and the most recent preceding <
                // < ... >
                // Ignore it if it's a closing tag (e.g. </div>)
                // Expand if it isn't a closing tag, but isn't an opening tag
                // Repeat expansion until the text is the same as the entire selection,
                //   at which point, give up and ignore it.
                openingAngleBracketIndex = selection.lastIndexOf('<')
                tag = selection.substring(openingAngleBracketIndex)

                // If it's a closing tag, ignore it.
                if(tag.indexOf('</') == 0)
                  tag = ''
                else {
                  // Expand if it isn't a closing tag, but isn't an opening tag,
                  //   and repeat until we're looking at the entire selection,
                  //   at which point, give up and ignore it.
                  while(!tag.match(regexp) && openingAngleBracketIndex > 0) {
                    openingAngleBracketIndex = selection.lastIndexOf('<', openingAngleBracketIndex - 1)
                    tag = selection.substring(openingAngleBracketIndex)
                  }
                  if(!tag.match(regexp))
                    tag = ''
                }

                // Should deselect if no match was found
                if(tag === '') {
                  editor.selectToBufferPosition(cursor)
                  return;
                }

                // Should select only the tag if the match isn't the whole selection
                if (tag !== selection)
                  console.log('tag: ' + tag)
                  console.log('selection: ' + selection)
                  console.log('cursor: ' + cursor)
                  console.log('selection, index of tag: ' + selection.indexOf(tag))
                  var newCursor = new Point(cursor.row, selection.indexOf(tag))
                  console.log('new cursor: ' + newCursor)
                  editor.setCursorBufferPosition(newCursor)
                  console.log('new cursor position: ' + editor.getCursorBufferPosition())
                  editor.selectToBufferPosition(cursor)
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

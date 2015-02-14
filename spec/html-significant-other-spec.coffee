HtmlSignificantOther = require '../lib/html-significant-other'

# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.

describe "your significant other", ->
  describe "on start-up, your significant other", ->

    it "subscribes to the editor"#, ->
      # expect(atom.packages.getActivePackage('html-significant-other')).not.toExist()
      # needs to then spy on the subscription method and activate the atom package
      # expect that we ran the subscription method
      # expect that its subscriptions include a subscription to the text buffer

    it "can tell when you've typed something"
    it "can tell when you've typed a closing angle bracket"

  describe "when a closing angle bracket is typed, your significant other", ->
    # Should work for handlebars, moustache, jade, etc.
    it "determines whether you're working in an HTML(ish) file"
    it "determines whether it was typed in a common templating engine's template"
    it "determines whether it was typed within a (java)script tag"

    # This test should pass if:
    #    - we're in an HTMLish file,
    #    - we're not in a template,
    #    - we're not in a script tag
    it "understands whether you're working in an environment in which you can be helped"
    it "can confirm that you just opened a tag"
    it "can tell what the tag you just opened is"
    it "knows how the tag you just opened closes"


  # sorry this one is grim but I couldn't do enough with the metaphor
  # anywhere else so this is what you get
  describe "when breaking up with your significant other, s/he", ->
    it "properly destroys all the evidence"

  # [workspaceElement, activationPromise] = []
  #
  # beforeEach ->
  #   workspaceElement = atom.views.getView(atom.workspace)
  #   activationPromise = atom.packages.activatePackage('html-significant-other')

  # describe "when the html-significant-other:toggle event is triggered", ->
  #   it "hides and shows the modal panel", ->
  #     # Before the activation event the view is not on the DOM, and no panel
  #     # has been created
  #     expect(workspaceElement.querySelector('.html-significant-other')).not.toExist()
  #
  #     # This is an activation event, triggering it will cause the package to be
  #     # activated.
  #     atom.commands.dispatch workspaceElement, 'html-significant-other:toggle'
  #
  #     waitsForPromise ->
  #       activationPromise
  #
  #     runs ->
  #       expect(workspaceElement.querySelector('.html-significant-other')).toExist()
  #
  #       htmlSignificantOtherElement = workspaceElement.querySelector('.html-significant-other')
  #       expect(htmlSignificantOtherElement).toExist()
  #
  #       htmlSignificantOtherPanel = atom.workspace.panelForItem(htmlSignificantOtherElement)
  #       expect(htmlSignificantOtherPanel.isVisible()).toBe true
  #       atom.commands.dispatch workspaceElement, 'html-significant-other:toggle'
  #       expect(htmlSignificantOtherPanel.isVisible()).toBe false
  #
  #   it "hides and shows the view", ->
  #     # This test shows you an integration test testing at the view level.
  #
  #     # Attaching the workspaceElement to the DOM is required to allow the
  #     # `toBeVisible()` matchers to work. Anything testing visibility or focus
  #     # requires that the workspaceElement is on the DOM. Tests that attach the
  #     # workspaceElement to the DOM are generally slower than those off DOM.
  #     jasmine.attachToDOM(workspaceElement)
  #
  #     expect(workspaceElement.querySelector('.html-significant-other')).not.toExist()
  #
  #     # This is an activation event, triggering it causes the package to be
  #     # activated.
  #     atom.commands.dispatch workspaceElement, 'html-significant-other:toggle'
  #
  #     waitsForPromise ->
  #       activationPromise
  #
  #     runs ->
  #       # Now we can test for view visibility
  #       htmlSignificantOtherElement = workspaceElement.querySelector('.html-significant-other')
  #       expect(htmlSignificantOtherElement).toBeVisible()
  #       atom.commands.dispatch workspaceElement, 'html-significant-other:toggle'
  #       expect(htmlSignificantOtherElement).not.toBeVisible()

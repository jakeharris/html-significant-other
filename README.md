# html-significant-other package

Just like your cute thing does two weeks after you start dating, this package finishes your (HTML) sentences for you.

`html-significant-other` will add ending tags to your HTML tags that need it as you type.

## Remaining issues
- **Won't recognize that the tag is closed if it is closed on a different line**
- There are several cases where it won't help you (e.g. a line with inline JS with a "<"), though in these cases it will do nothing

## Assumptions
- Opening tags **never** begin with anything but '<' and then an immediate alphabetic character, i.e. no spaces between the < and the letter
- Closing tags **never** begin with anything but '</'

## Design paradigm
Don't get in the way. If it doesn't work right, do nothing.

## Coding standards
- Avoid semicolons where possible
- Opening brackets on same line as block identifier

## Testing standards
- Use Jasmine
- Unwritten tests should be defined with it(), supplying no handler, e.g.
```` js
describe("An unwritten test", function () {
  it("is not supplied a handler.")
})
````

![A screenshot of your package](https://f.cloud.github.com/assets/69169/2290250/c35d867a-a017-11e3-86be-cd7c5bf3ff9b.gif)

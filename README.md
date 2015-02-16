# html-significant-other package

Just like your cute thing does two weeks after you start dating, this package finishes your (HTML) sentences for you.

`html-significant-other` will add ending tags to your HTML tags that need it as you type. Works in any file types that Atom considers HTML-like, including Handlebars files.

![A screenshot of your package](http://g.recordit.co/vIrkrbOPW0.gif)

*The above happened in a Handlebars file.*

## Issue policy
Please feel free to create issues on the [Github repo](https://github.com/javakat/html-significant-other/issues)! How will this relationship ever improve if you aren't willing to express what you want?

I'll try and fix them myself as time allows, but pull requests are welcome!

## Remaining issues
- **Won't recognize that the tag is closed if it is closed on a different line**
- There are several cases where it won't help you (e.g. a line with inline JS with a "<"), though in these cases it will do nothing

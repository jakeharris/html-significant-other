## 0.1.1 - Bugfixes
* Fixed a bug where typing a '>' between an opening and closing pair of tags would...behave poorly

## 0.1.0 - First Release
* Closes any tag with entire opening tag on same line when typing '>'
* Places your cursor between the opening and closing tags so you can just start goin'!

### Known Bugs
* Closes all tags, whether or not the tag closes (e.g. <img>)
* Should handle multiline tags, but does not
* Is unaware of tags that are already closed

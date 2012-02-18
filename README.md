SelectSearchFilter
===========

A great Mootools plugin to add live search/filter and a custom design to select form HTML element(s).

This plugin will make it faster for a end user to search the right option that she/he looking for.

![Screenshot](https://raw.github.com/jnbdz/SelectSearchFilter/master/SelectSearchFilter.png)

How to use
----------

You just need to call SelectSearchFilter() class.

**Syntax:**

    var selectors = new SelectSearchFilter(tag, [options]);

**Implements:**

[Events](http://mootools.net/docs/core/Class/Class.Extras#Events), [Options](http://mootools.net/docs/core/Class/Class.Extras#Options)
    
**Arguments:**

1. tag - (string) String of the tag to match, a CSS Selector or the id of the element.
2. options - (object, optional) The options object.

**Options:**

* errors (object, optional) Hash of all the error messages.
    * 0 (string) This is the default massage: 'You did not select any element or elements.'.

Method: attach
----------

Attaches the mouse listeners to the button, html, and body element. And adding the input element to add the live search.

**Syntax:**

    selectors.attach();

**Notes:**

- You only need to use this method when you manually detached the mouse listeners before.

Method: detach
----------

Detaches the mouse listeners from the elements it was attach to. It also removes the live search, the input element and brings back the select element that had is display set to "none" to "inline" (you can change it via the events called or via the options).

**Syntax:**

    selectors.detach();

**Returns:**

- (object) This SelectSearchFilter instance.


-------


Copyright (C) 2012 Jean-Nicolas Boulay Desjardins ([http://jean-nicolas.com/](http://jean-nicolas.com/))

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
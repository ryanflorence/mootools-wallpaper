MooTools Wallpaper Library
==========================

Contains three classes: Wallpaper, Wallpaper.Fit, Wallpaper.Fill.

- __Wallpaper__: Base class, not intended to be used on its own.
- __Wallpaper.Fit__: Like the desktop wallpaper option "fit to window", this will fit an element inside its parent element, maintaining the original aspect ratio.
- __Wallpaper.Fill__: Like the desktop wallpaper option "fill screen", this will resize the element to fill the entire space of the parent element, while maintaining the original aspect ratio.

Demo
----

View the demo on [jsFiddle](http://jsfiddle.net/rpflorence/A7VNN/)

Options
-------

Both `Wallpaper.Fit`, and `Wallpaper.Fill` have the same options:

- `now` (boolean, defaults to `true`) - Fits or fills the element upon initialization.
- `anchor` (object, defaults to `{x: 'left', y: 'top'}`) - Defines how to anchor the element.
  - `x`: Accepts `left`, `center`, and `right`.
  - `y`: Accepts `top`, `center`, and `right`

How to use
----------

### HTML

    <div id=container>
      <img id=element src="image.jpg">
    </div>

### CSS

    #container {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
    
    #element {
      width: 1000px; 
      height: 700px
    }

Nothing will happen If your element has no height and width.  This works with any element, not just images (though the use case is strange, indeed).

Typically your container element will adjust with the window size.  It also makes sense to set the container's overflow to hidden.

### JavaScript

The JavaScript is easy.

    new Wallpaper.Fit('element', {
      anchor: {x: 'center', y: 'top'}
    });
    new Wallpaper.Fill('element',{
      anchor: {x: 'center', y: 'center'}
    });

If you're using images, and not declaring their height and width, you should ... alternatively, create your instance after the page has loaded.

License
-------

MIT-Style
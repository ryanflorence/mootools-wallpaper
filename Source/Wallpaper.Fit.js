/*
---

name: Wallpaper.Fit

license: MIT-style license.

authors: Ryan Florence <http://ryanflorence.com>

requires:
  - Wallpaper

provides: [Fit]

...
*/

Wallpaper.Fit = new Class({

	Extends: Wallpaper,

	getHeight: function(){
		var returns = (this.container.wider)
			? this.container.size.y
			: this.container.size.x / this.element.ratio;
		return this.element.nextHeight = returns;
	},

	getWidth: function(){
		var returns = (this.container.wider)
			? this.container.size.y * this.element.ratio
			: this.container.size.x;
		return this.element.nextWidth = returns;
	},

	getLeft: function(){
		if (this.options.anchor.x === 'center' && this.container.wider){
			return (this.container.size.x - this.element.nextWidth) / 2;
		}
		if (this.options.anchor.x === 'right'){
			return this.container.size.x - this.element.nextWidth;
		}
		return 0;
	},

	getTop: function(){
		if (this.options.anchor.y === 'center' && !this.container.wider){
			return (this.container.size.y - this.element.nextHeight) / 2;
		}
		if (this.options.anchor.y === 'bottom'){
			return this.container.size.y - this.element.nextHeight;
		}
		return 0;
	}

});

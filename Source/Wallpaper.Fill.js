/*
---

name: Wallpaper.Fill

license: MIT-style license.

authors: Ryan Florence <http://ryanflorence.com>

requires:
  - Wallpaper

provides: [Fill]

...
*/

Wallpaper.Fill = new Class({

	Extends: Wallpaper,

	getHeight: function(){
		var returns = (this.container.wider)
			? this.container.size.x / this.element.ratio
			: this.container.size.y;
		return this.element.nextHeight = returns;
	},

	getWidth: function(){
		var returns = (this.container.wider)
			? this.container.size.x
			: this.container.size.y * this.element.ratio;
		return this.element.nextWidth = returns;
	},

	getLeft: function(){
		if (this.options.anchor.x === 'center' && !this.container.wider){
			return -(this.element.nextWidth - this.container.size.x) / 2;
		}
		if (this.options.anchor.x === 'right'){
			return -(this.element.nextWidth - this.container.size.x);
		}
		return 0;
	},

	getTop: function(){
		if (this.options.anchor.y === 'center' && this.container.wider){
			return -(this.element.nextHeight - this.container.size.y) / 2;
		}
		if (this.options.anchor.y === 'bottom'){
			return -(this.element.nextHeight - this.container.size.y);
		}
		return 0;
	}

});

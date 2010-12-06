/*
---

name: Wallpaper

license: MIT-style license.

authors: Ryan Florence <http://ryanflorence.com>

requires:
  - Core/Class.Extras
  - Core/Number
  - Core/Element.Dimensions
  - Core/Element.Event

provides: [Wallpaper]

...
*/

var Wallpaper = new Class({

	Implements: [Options],

	options: {
		now: true,
		anchor: {
			x: 'left', // center, right
			y: 'top'  // center, bottom
		}
	},

	initialize: function(element, options){
		this.setOptions(options);
		this.element = document.id(element);
		this.bound = {
			resize: this.go.bind(this)
		};
		this.setup().attach();
		if (this.options.now) this.go();
	},

	setup: function(){
		this.element.size = this.element.getSize();
		this.element.ratio = this.element.size.x / this.element.size.y;
		this.container = this.element.getParent();
		if (this.container.getStyle('position') === 'static' && this.container !== document.body) {
			this.container.setStyle('position', 'relative');
		}
		this.element.setStyle('position', 'absolute');
		return this;
	},

	attach: function(){
		window.addEvent('resize', this.bound.resize);
		return this;
	},

	detach: function(){
		window.removeEvent('resize', this.bound.resize);
		return this;
	},

	go: function(){
		this.container.size = this.container.getSize();
		this.container.ratio = this.container.size.x / this.container.size.y;
		this.container.wider = this.container.ratio > this.element.ratio;
		this.element.setStyles({
			height: this.getHeight().round(),
			width: this.getWidth().round(),
			left: this.getLeft().round(),
			top: this.getTop().round()
		});
		return this;
	},

	getHeight: function(){ return 0 },
	getWidth: function(){ return 0 },
	getLeft: function(){ return 0 },
	getTop: function(){ return 0 }

});

$(function() {
"use strict";

    // assign $flowers to the content which has id #flower-items. in this case it is a ul
	var $flowers = $('#flower-items');
	
	$flowers
    // finds all matching links and then apply the colorbox method
    	.find('a')
    	.colorbox({
            // rel is the anchor for the colorbox. in this case it is gallery.
    		'rel' : 'gallery',
    		'maxWidth' : '90%',
            // this sets the transition type of which elastic, fade, and none are options
			'transition' : 'fade',
			'speed' : 150,
            // changes the transparency of the colorbox in relation to the content behind it.
            // Takes a value of 0-1, with 1 causing the content to be 100% transparent & 0 causing it to be 0%
            // transparent
			'opacity' : .95,
            // this makes it a slideshow which is required as per the assignment
			'slideshow' : true,
            // this sets the speed in milliseconds. 3000 = 3 seconds.
			'slideshowSpeed' : 3000,
            // sets the text during the slide show to indicate what image of the total they are on
			'current' : 'Bouquet {current} of {total}'
    	});
});
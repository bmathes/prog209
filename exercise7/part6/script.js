$(function() {
    "use strict";

    // defines $moveIt as the location of the element with the id #moveIt
    var $moveIt = $('#moveIt');

    // finds the button in the div #moveIt
    var $btn = $moveIt.find('button');

    // finds the image in the div #moveIt
    var $img = $moveIt.find('img');

    // one makes it so this action only happens on the first click so it doesn't go off screen. can also use
    // a target div and move the target to the location of said div
    $($btn).one('click', (function(e) {

        // prevent the default action from taking place
        e.preventDefault();
            // animate the image using jQuery
            $img.animate({
                // sets the opacity to 50%
                'opacity': 0.5,
                // moves the image 600 pixels to the right of its current position
                'margin-left': '+=600',
                // changes the height to 50% of its original value after it moves to the right 600 pixels
                'height': '50%'

                // the animation takes 1500 milliseconds and uses the ease transition called easeInBack for a
                // animation effect supplied by the jquery.easing.1.3.js file
            }, 1500, 'easeInBack');
    }))
});

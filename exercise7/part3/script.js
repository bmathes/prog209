$(function() {
    "use strict";

    // defines $fadeIt as the location of the element with the id #fadeIt
    var $fadeIt = $('#fadeIt');


    // finds the image in the id #fadeIt
    var $img = $fadeIt.find('img');

    // one makes it so this action only happens on the first click so it doesn't go off screen. can also use
    // a target div and move the target to the location of said div
    $($img).one('click', (function(e) {

        // prevent the default action from taking place
        e.preventDefault();

        // fadeTo takes two arguments. The first will cause the element to  fade out over a period of 1000 milliseconds
        // or 1 second. The second is the opacity which is set to 50%
        $img.fadeTo(1000, 0.5);

    }))
});

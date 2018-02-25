$(function(){
'use strict';

    // set the var $form to the id #my-form so we can easily edit it
	var $form = $('#my-form');

    // Selects the 1st element that is a child of #my-form and adds the class error which adds a red border, background
    // and padding
	$form.find('.group:nth-child(1)')
		.addClass('error');

	// Selects the 2nd element that is a child of #my-form and adds the class required which adds a blue border,
    // background and padding
    $form.find('.group:nth-child(2)')
        .addClass('required');

	// Selects the 3rd element that is a child of #my-form, adds a 'msg' class which adds a green border, background,
    // and padding, & then it appends text that says 'Extra good!', &
    // adds a message that says Good Choice! only one time when a user enters data
	$form.find('.group:nth-child(3)')
		.addClass('msg')
		.append('<p>Extra good!</p>')

        // .one makes it so it only fires once as opposed to everytime the form data chanes.
        .one('change', function() {
            // $(this) refers to the nth-child(3) element
            $(this).append('<p>Good choice!</p>');
        })
});

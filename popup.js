$(document).ready(function() {
//
$('a.poplight[href^=#]').click(function() {
var popID = $(this).attr('rel'); //Get Popup Name
var popURL = $(this).attr('href'); //Get Popup href to define size
var query= popURL.split('?');
var dim= query[1].split('&');
var popWidth = dim[0].split('=')[1]; //Gets the first query string value
$('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="#" class="close"></a>');
var popMargTop = ($('#' + popID).height() + 80) / 2;
var popMargLeft = ($('#' + popID).width() + 80) / 2;
//Apply Margin to Popup
$('#' + popID).css({
'margin-top' : -popMargTop,
'margin-left' : -popMargLeft
});
$('body').append('<div id="fade"></div>');
$('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer - .css({'filter' : 'alpha(opacity=80)'})
return false;
});
$('a.close, #fade').live('click', function() {
$('#fade , .popup_block').fadeOut(function() {
$('#fade, a.close').remove(); //fade them both out
});
return false;
});
});
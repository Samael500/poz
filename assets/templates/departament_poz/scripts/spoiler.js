$(document).ready(function(){
    $('.spoiler').hide();
    $('.knob').click(function(){
        $(this).next().slideToggle("fast");
        $(this).toggleClass("active");
    });
});
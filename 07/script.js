$(document).ready(function(){
    var figura = $('.square');
    figura.click(function(){
        figura.animate({bottom: '-=100px'}, 500)
    })
});
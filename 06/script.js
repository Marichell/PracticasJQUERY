$(document).ready(function(){
    //seleccionar el elemento dentro de una variable
    var figura = $('.square');
    // Agrega un controlador de eventos
    figura.click(function(){
        // Anima el elemento, definir posición y tiempo
        figura.animate({top: '-=100'}, 500)
    });
});
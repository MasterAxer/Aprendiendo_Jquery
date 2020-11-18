$(document).ready(function () {
    $('span').text('ríos');
    $('h2').css({'text-align':'center','background-color':'#90ee90'});
    $('h1').addClass('titRio');
    $('.titRio').css({'text-align':'center','color':'aqua'})
    $('#rioUno').attr('src','https://futurorenovable.cl/wp-content/uploads/2015/08/rios-agua-img-noticias.masverdedigital-985x600.jpg');
    $('#rioDos').attr('src','http://awsassets.wwf.es/img/z1c5564_michael_poliza_wwf_webres_81544.jpg');
    $('body').append('<p>&copy; Desarrollado por:<a href="https://github.com/MasterAxer" target="_blank">Jorge Armando López Jaramillo</a></p>');
    $('p:last').css({'text-align':'center','margin':'auto','border-top':'1px solid black','padding':'25px'});
});
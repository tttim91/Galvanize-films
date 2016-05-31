$(document).ready(function() {
    $('.submit').click(function() {
        var url = "http://api.themoviedb.org/3/search/keyword?api_key=3cd423caf6414f9a2c9d9e68ff2c5a24&query=";
        url += $('.search').val();
        $.get(url).then(function(data) {
            console.log(data["results"][1]["name"]);
            $('body').append('<p>'+data["results"][1]["name"]+'</p>');
        });
    });

    $('.hamburgermenu').click(function () {
        $('.menu').toggle(300);
    });

    $("main").click(function () {
        if ($('.menu').is(":visible") === true) {
            $('.menu').fadeOut(300);
        }
    });
    $("header section:first-child").click(function () {
        if ($('.menu').is(":visible") === true) {
            $('.menu').fadeOut(300);
        }
    });

});

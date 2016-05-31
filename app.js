$(document).ready(function() {
    $.get('http://api.themoviedb.org/3/search/keyword?api_key=3cd423caf6414f9a2c9d9e68ff2c5a24&query=Jackie').then(function(data) {
        console.log(data);
        $('h1').click(function() {
            $('body').append('<p>'+data["results"][1]["name"]+'</p>');
        });
    });
});

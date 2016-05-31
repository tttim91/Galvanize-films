$(document).ready(function() {
    $.get('http://api.themoviedb.org/3/movie/550?api_key=3cd423caf6414f9a2c9d9e68ff2c5a24').then(function(data) {
        console.log(data);
    });
});

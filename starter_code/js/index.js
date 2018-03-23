$(document).ready(function() { // wait for page to load

    $("form").submit(function(e){
    	e.preventDefault(); // Prevent form submission
    	var city = $("#city-type").val().toLowerCase(); // lowercase inputs
    	if (city == 'new york' || city == 'new york city' || city == 'nyc') {
            $("body").attr("class", 'nyc');
            } // change to ny
        else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
            $("body").attr("class", 'sf');
            } // change to other cities if not ny
        else if (city == 'los angeles' || city == 'la' || city == 'lax') {
            $("body").attr("class", 'la');
            }
        else if (city == 'austin' || city == 'atx') {
            $("body").attr("class", 'austin');
            }
        else if (city == 'sydney' || city == 'syd') {
            $("body").attr("class", 'sydney');
            }
        else {
            $("body").css("background-image", ""); // or go back to default when input doesn't match any if statements
        }
    })
})
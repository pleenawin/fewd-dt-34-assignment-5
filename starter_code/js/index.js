$(document).ready(function() { // wait for page to load

    $("form").submit(function(e){
    	e.preventDefault(); // Prevent form submission
    	var city = $("#city-type").val().toLowerCase(); // lowercase inputs
    	if (city == 'new york' || city == 'new york city' || city == 'nyc') {
            $("body").attr("src", "nyc.jpg");
            } // change to ny
        else if (city == 'san francisco' || city == 'sf' || city == 'bay area') {
            $("body").css("background-image", "url('images/sf.jpg')");
            } // change to other cities if not ny
        else if (city == 'los angeles' || city == 'la' || city == 'lax') {
            $("body").css("background-image", "url('images/la.jpg')");
            }
        else if (city == 'austin' || city == 'atx') {
            $("body").css("background-image", "url('images/austin.jpg')");
            }
        else if (city == 'sydney' || city == 'syd') {
            $("body").css("background-image", "url('images/sydney.jpg')");
            }
        else {
            $("body").css("background-image", ""); // or go back to default when input doesn't match any if statements
        }
    })
})
// By SkyX [ID FR] **_** 
// $(document).ready();

var callBackGetSuccess = function(data) {
    document.getElementById("temp_text").innerHTML = data.main.temp;
    document.getElementById("city_text").innerHTML = data.name;

    document.getElementById("temp_max_text").innerHTML = "<img width='15' src='https://img.icons8.com/fluency/344/thermometer-up.png'/> Température Max > " + data.main.temp_max + "°C";
    document.getElementById("temp_min_text").innerHTML = "<img width='15' src='https://img.icons8.com/fluency/344/thermometer-down.png'/> Température Min > " + data.main.temp_min + "°C";
    
    console.log(data);
}

function request_to_API() {
    var city = $("#name_city").val();

    if (city == "") {
        alert("Indiquez-bien le nom de la ville !");
    } else {
        var API_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric";
        
        $.get(API_URL, callBackGetSuccess).done(function(){})
        .fail(function() { console.log("ERROR"); });
    }
}

// END
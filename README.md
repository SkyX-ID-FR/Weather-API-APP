# ⛅ Weather-API-APP
Ce projet est une WebApp qui envoie une requête vers une API et qui lui renvoie des donnés Météo. Le tout dans une interface UI Design Neumorphic. Il utlise la techno de Jquery pour effectuer sa requête avec la fonction ``.get()`` > https://api.jquery.com/jquery.get/
<br>
```javascript 

$.get(API_URL, callBackGetSuccess).done(function(){})
        .fail(function() { console.log("ERROR"); });
        
// Renvoie à la fonction callBackGetSuccess() si la requête a bien été reçue et envoyée !
function callBackGetSuccess() {
  console.sucess("OK");
}        
```
L'API de OpenWeatherMap (https://openweathermap.org/api) renvoie des données au format Json (depuis/par la requête envoyée), comme ceci :
```json
{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 10000,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
  }                 
```
Ensuite, c'est à nous de trier avec la variable ``data`` déjà passé dans la fonction ``callBackGetSuccess();`` :
```javascript
var callBackGetSuccess = function(data) {    
    // On log toutes les données récupérées :
    console.log(data);
    
    // On log que certaines données récupérées :
    console.log(data.main.temp);
    console.log(data.name;

    console.log(data.main.temp_max);
    console.log(data.main.temp_min);
}

```
# 🎬 Démo :
<img src="https://zupimages.net/up/22/21/kgqv.gif"/>

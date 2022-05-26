# ⛅ Weather-API-APP
Ce projet est une WebApp qui envoie une requête vers une API et qui lui renvoie des donnés Météo. Le tout dans une interface UI Design Neumorphic. Il utlise la techno de Jquery pour effectuer sa requête avec la fonction ``.get()`` > https://api.jquery.com/jquery.get/
<br>
```javascript 

$.get(API_URL, callBackGetSuccess).done(function(){})
        .fail(function() { console.log("ERROR"); });
        
// Renvoie à la fonction callBackGetSuccess() si la requête a bien été reçue et envoyée !
function callBackGetSuccess() {
  alert("Sucess !");
}
        
```

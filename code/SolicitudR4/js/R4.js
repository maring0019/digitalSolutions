obtener();
var informacion = document.querySelector('#informacion');
function obtener() {
    fetch('http://api.weatherstack.com/current?access_key=1a91e033bf9cf333e6911646080ef279&query=New%20York')
    .then(resp => resp.json())
    .then(data => {
        var dato=data.current;
        console.log(data.current);
        informacion.innerHTML="<td>"+ dato.observation_time + "</td> "+ "<td> "+ dato.temperature +  "</td> "+ "<td> "+ dato.weather_code + "</td> "+ "<td> <img src=" + dato.weather_icons[0] + '> </td>'  + "<td> "+ dato.weather_descriptions[0] + "</td> " + "<td> "+ dato.wind_speed +  "</td> " ;
    })
} 

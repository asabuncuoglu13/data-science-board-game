let currentDetail = "ist";
let mainMap = L.map('main_map').setView([41, 29], 13);
let detailLink = "detail.html"+"#"+currentDetail;

function createHTMLPopup(imageURL, title, text) {
    return '<img src="' + imageURL + '"><b>' + title + '</b><br><p>' + text + '</p><br><a href='+detailLink+'>See' +
        ' Details</a>';
}

let pr_ist = createHTMLPopup("", "Istanbul Metro Transportation",
    "Istanbul is the most populous city in Turkey and the country's economic, cultural and historic center. " +
    "The population is still growing and approximately 18 million people live in Istanbul." +
    "Every new day requires a new solution on the metro line");

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 6,
    minZoom: 2,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mainMap);

// Add Istanbul Data Problem
L.marker([41, 28.97]).addTo(mainMap)
    .bindPopup(pr_ist).openPopup();

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mainMap);
}

function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}

//mainMap.on('locationfound', onLocationFound);
//mainMap.on('locationerror', onLocationError);
mainMap.on('click', onMapClick);

//mainMap.locate({setView: true, maxZoom: 8});

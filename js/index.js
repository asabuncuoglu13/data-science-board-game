let mode = 0;
let mainMap;

const customPop = [
    {
        'className': 'racePop'
    },
    {
        'className': 'rushPop'
    },
    {
        'className': 'vocabPop'
    }];

function createHTMLPopup(imageURL, title, text, city) {
    return '<img src="' + imageURL +
        '"><b>' + title +
        '</b><br><p>' + text +
        '</p><br><a href=' + 'detail.html#' + city + '-' + mode +
        '>See Details</a>';
}

let problems = [
    createHTMLPopup("", "Istanbul Metro Transportation",
        "Istanbul is the most populous city in Turkey and the country's economic, cultural and historic center. " +
        "The population is still growing and approximately 18 million people live in Istanbul." +
        "Every new day requires a new solution on the metro line", tr),

    createHTMLPopup("", "Oslo Bikes",
        "Different transportation methods can be used to reduce carbon emissions in the world. Norway is one of the most" +
        " environmentally friendly countries in the world. They provide bikes alongside the city. Can you map all the" +
        " bikes around the city to find the bikes easier? ", nor),

    createHTMLPopup("", "UK Music",
        "Over the course of their career, and even beyond their split, John, Paul, George and Ringo have together" +
        " amassed 15 chart-toppers. Kicking off with debut Please Please Me in 1963, and hitting the top spot 37" +
        " years later with hits collection 1 in 2000, the Beatles have spent an incredible 174 weeks at Number 1." +
        " Please Please Me was their longest run at the summit, racking up an incredible 30 consecutive weeks at" +
        " Number 1.", uk),

    createHTMLPopup("", "Bush Fires",
        "In 2020, Australia faced a climate disaster that affects the whole country. Multiple bushfires occurred at" +
        " the same time. ", aus)
];

function buildMap(){
    document.getElementById('main_map').innerHTML = "";
    mainMap = L.map('main_map').setView(coordinates[0], 13);
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
    L.marker(coordinates[0]).bindPopup(problems[0], customPop[mode]).addTo(mainMap).openPopup();
    for (var i = 1; i < coordinates.length; i++) {
        L.marker(coordinates[i])
            .bindPopup(problems[i], customPop[mode]).addTo(mainMap);
    }
}



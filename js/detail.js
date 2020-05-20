function fillPage(city, mode) {
    document.getElementById('content').innerHTML =
        '<h1 class="title">' + getTitle(city) + '</h1>\n' +
        '<h2 class="subtitle">' + getSubtitle(city) + '</h2>' +
        '<p>' + getText(city) + '</p>\n' + getIframe(mode, city);
}

function getTitle(city) {
    let title = "";
    switch (city) {
        case tr:
            title = "Istanbul Metro transportation";
            break;
        case uk:
            title = "UK Music Charts";
            break;
        default:
            break;
    }
    return title;
}

function getSubtitle(city) {
    let subtitle = "";
    switch (city) {
        case tr:
            subtitle = "Railway transportation is one of the most important investment areas in crowded cities as it handles large numbers of people with ease, it is environmentally friendly and it reduces the traffic.";
            break;
        default:
            break;
    }
    return subtitle;
}

function getText(city) {
    let text = "";
    switch (city) {
        case tr:
            text = "The municipality needs a quick way to visualize this data to define the requirements. You can use Google Sheets to easily visualize the data on the map. [Add custom marker colors to our interface, change the color with conditional formatting]";
            break;
        default:
            break;
    }
    return text;
}

function getDataSource() {
    let link = "";
    switch (city) {
        case tr:
            link = "https://data.ibb.gov.tr/dataset/rayli-sistemler-maksimum-yolculuk-sayisi/resource/81fa122e-49c1-4191-aac9-a38becd0c359 ";
            break;
        default:
            break;
    }
    return link;
}

function getIframe(mode, city) {
    let frame = "";
    if (city === tr) {
        if (mode === 0) {
            frame = "<iframe class='frame'" +
                " src=\"https://data.ibb.gov.tr/dataset/rayli-sistemler-maksimum-yolculuk-sayisi/resource/81fa122e-49c1-4191-aac9-a38becd0c359/view/a63d798f-377a-46b8-9882-525f5e6d751f\" frameBorder=\"0\"></iframe>";
        }
        if (mode === 2) {
            frame = '<iframe hidden id="JotFormIFrame-201402082424036" title="Form" onload="window.parent.scrollTo(0,0)" allowtransparency="true" allowfullscreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/201402082424036" frameborder="0"' +
                'style=" min-width: 100%; height:539px; border:none;" scrolling="no"> </iframe>';
        }
    }
    return frame;
}

fillPage(currentDetail[0], currentDetail[1]);
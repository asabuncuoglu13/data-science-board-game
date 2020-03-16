function fillPage(city) {
    document.getElementById('content').innerHTML =
        '<h1 class="title">' + getTitle(city) + '</h1>\n' +
        '<h2 class="subtitle">' + getSubtitle(city) + '</h2>' +
        '<p>' + getText(city) + '</p>\n';
}

function getTitle(city) {
    let title = "";
    switch (city) {
        case "ist":
            title = "Istanbul Metro transportation";
            break;
        default:
            break;
    }
    return title;
}

function getSubtitle(city) {
    let subtitle = "";
    switch (city) {
        case "ist":
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
        case "ist":
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
        case "ist":
            link = "https://data.ibb.gov.tr/dataset/rayli-sistemler-maksimum-yolculuk-sayisi/resource/81fa122e-49c1-4191-aac9-a38becd0c359 ";
            break;
        default:
            break;
    }
    return link;
}


fillPage(currentDetail);
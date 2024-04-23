function loadXMLDocForCarousel() {
    //Code to do XML HTTP request (see slides) goes here
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {      // Action to be performed when the document is read;
            fillHomeCarousel(this);
        }
    };
    xhttp.open("GET", "1.xml", true);
    xhttp.send();
}

function fillHomeCarousel(xml) {
    let x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML; //Response returned as XML data
    txt = "";
    x = xmlDoc.getElementsByTagName("ThemeEntityAbridgedData");

    // Get the ul element inside the carousel
    let slides = document.querySelector('.carousel [data-slides]');

    for (i = 0; i < x.length; i++) {
        let imagePath = x[i].getElementsByTagName("DefaultImagePath")[0].innerHTML.trim();
        let geoLocation = x[i].getElementsByTagName("GeoLocation")[0].innerHTML.trim();
        let imageName = x[i].getElementsByTagName("DisplayName")[0].innerHTML.trim();

        // Check if both image source and geo location exist
        if (imagePath && geoLocation && imageName != "Rock Elm") { //getting rid of rock elm cause it doesnt work
            // Create li element

            let li = document.createElement('li');
            li.classList.add('slide');

            // Create img element
            let img = document.createElement('img');
            img.src = imagePath;
            img.alt = x[i].getElementsByTagName("DisplayName")[0].innerHTML.trim();
            li.textContent = img.alt;

            // Append img to li
            li.appendChild(img);
            if (i === 0) {
                li.dataset.active = true;
            }
            // Append li to ul
            slides.appendChild(li);

        }
    }
    // Set the first slide as active
    slides.querySelector('.slide').classList.add('active');
}

function loadXMLDocForTours() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) { // Check if the request is complete
            if (this.status == 200) { // Check if the request was successful
                console.log("XML response:", this.responseText); // Log the XML response
                fillTourCarousel(this);
            } else {
                console.error("Failed to load XML data. Status code: " + this.status);
            }
        }
    };
    xhttp.open("GET", "2.xml", true);
    xhttp.send();
}


function fillTourCarousel(xml) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml.responseText, "text/xml");

    let x = xmlDoc.getElementsByTagName("ThemeData");
    let slides = document.querySelector('.carousel [data-slides]');

    if (!slides) {
        console.error("Slides element not found");
        return;
    }

    for (let i = 0; i < x.length; i++) {
        let themeName = x[i].getElementsByTagName("ThemeName")[0];
        let description = x[i].getElementsByTagName("Description")[0];
        let themeId = x[i].getElementsByTagName("ThemeId")[0];

        if (themeName && description && themeId) {
            let themeNameText = themeName.innerHTML.trim();
            let descriptionText = description.innerHTML.trim();
            let themeIdText = themeId.innerHTML.trim();

            let p = document.createElement('p');
            p.id = "https://www2.winona.edu/m/arboretum/directory.asp?t=" + themeIdText;
            p.textContent = themeNameText + " " + descriptionText + "\n";

            let m = document.createElement('p');
            m.id = "https://www2.winona.edu/m/arboretum/thememap.asp?t=" + themeIdText;
            m.textContent = " ";




            let li = document.createElement('li');
            li.classList.add('slide');
            li.appendChild(p);
            li.appendChild(m);


            slides.appendChild(li);

            if (i === 0) {
                li.dataset.active = true;
            }
        }
    }

}
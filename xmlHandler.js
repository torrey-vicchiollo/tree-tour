function loadXMLDoc() {
    //Code to do XML HTTP request (see slides) goes here
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {      // Action to be performed when the document is read;
            myFunction(this);
        }
    };
    xhttp.open("GET", "1.xml", true);
    xhttp.send();
}

function myFunction(xml) {
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
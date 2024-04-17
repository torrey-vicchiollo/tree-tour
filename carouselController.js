
function loadImagesIntoCarousel(carousel){
    alert("called function");
    carousel = document.getElementById(carousel);
    let testText = document.createElement("p");
    testText.innerHTML = 'hello world';
    carousel.appendChild(testText);
    let image = document.createElement("img"); // Create an image element
    image.src = "src/images.png"; // Set the source of the image
    carousel.appendChild(image); // Append the image to the carousel
    

}
const buttons = document.querySelectorAll("[data-carousel-button]");

// Select all elements with the attribute data-carousel-button and store them in the buttons variable
// The querySelectorAll method returns a NodeList containing all matching elements

buttons.forEach(button => {
    // Iterate over each button in the buttons NodeList using forEach method
    // Add a click event listener to each button
    button.addEventListener("click", () => {
        // Check if the clicked button has a data-carousel-button attribute with the value "next"
        // If yes, set offset to 1, otherwise set it to -1
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        // Find the closest ancestor element of the clicked button that has a data-carousel attribute
        // Then, find the element with the attribute data-slides within that ancestor
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]');
        // Find the slide with the attribute data-active within the slides element
        // This represents the currently active slide in the carousel
        const activeSlide = slides.querySelector("[data-active]");
          // Find the index of the active slide within the slides element
        // Then, adjust the index by the offset to determine the index of the next slide
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      // If the new index is less than 0, loop back to the last slide
        if (newIndex < 0) newIndex = slides.children.length - 1;
        // If the new index is greater than or equal to the number of slides, loop back to the first slide
        if (newIndex >= slides.children.length) newIndex = 0;
          // Set the data-active attribute of the next slide to true, making it the active slide
        slides.children[newIndex].dataset.active = true;
        // Remove the data-active attribute from the currently active slide
        delete activeSlide.dataset.active;
        
    });
});
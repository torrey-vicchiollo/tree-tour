
function pullFromLinkSlide() {
    console.log("linkButton");
    let currentSlide = document.querySelector('.slide[data-active]');
    if (currentSlide) {
        let idname = currentSlide.querySelector('p').id;
        if (idname) {
            window.location.href = idname;
        }
    }
}

function pullFromLinkSlideMap() {
    console.log("mapButton");
    let currentSlide = document.querySelector('.slide[data-active]');
    if (currentSlide) {
        let idname = currentSlide.querySelector('p').id;
        if (idname) {
            window.location.href = idname;
        }
    }
}

function pullFromLinkSlide() {
    let currentSlide = document.querySelector('.slide[data-active]');
    if (currentSlide) {
        let className = currentSlide.querySelector('p').className;
        if (className) {
            window.location.href = className;
        }
    }
}
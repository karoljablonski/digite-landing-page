//pobrać konkretne elementy na których będziemy wykonywać akcję animacji:
const workSingleContainer = document.querySelectorAll(".our-work-single-img");
const workIng = document.querySelector(".our-work-single-img>img")
const workButton = document.querySelector(".our-work-single-img>button")
const workImgTitle = document.querySelector("p.img-title");
const workImgDesc = document.querySelector("p.img-desc");
const animationFeature = document.querySelector(".animation-feature");

workSingleContainer.forEach(display);
    function display() {
    workSingleContainer.addEventListener("click", function() {
    // workIng.style.filter = "brightness(50%)";
    workIng.classList.toggle("bright");
    // workButton.style.opacity = "1";
    workButton.classList.toggle("opacities");
    // workImgTitle.style.left = "0";
    workImgTitle.classList.toggle("left0");
    // workImgDesc.style.opacity = "1";
    workImgDesc.classList.toggle("opacities");
    // animationFeature.style.left = "-130%"
    animationFeature.classList.toggle("left130")
});
    }
console.log("XD");
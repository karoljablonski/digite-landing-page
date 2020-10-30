$("span.burger").on("click", function() {
    $("i.fa-bars, i.fa-times").toggleClass("turned-off")
    $(".main-nav-ul").toggleClass("active-hamburger")
});
const navigation = document.querySelector(".main-nav");
addEventListener("scroll", function() {
    if(scrollY > 230) {
        navigation.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    } else {
        navigation.style.backgroundColor = "rgba(255, 255, 255, 0.2)"
    };
});
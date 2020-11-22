$("span.burger, .main-nav-ul").on("click", function() {
    $("i.fa-bars, i.fa-times").toggleClass("turned-off")
    $(".main-nav-ul").toggleClass("active-hamburger")
    $(".burger").toggleClass("active-hamburger")
});
const navigation = document.querySelector(".main-nav");
addEventListener("scroll", function() {
    if(scrollY > 230) {
        navigation.style.background = "linear-gradient(#fff 60%, rgba(255, 255, 255, 0))";
    } else {
        navigation.style.background = "linear-gradient(#fff, rgba(255, 255, 255, 0)";
    };
});
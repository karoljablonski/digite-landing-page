$("span.burger").on("click", function() {
    $("i.fa-bars, i.fa-times").toggleClass("turned-off")
    $(".main-nav-ul").toggleClass("active-hamburger")
});
const navigation = document.querySelector(".main-nav");
addEventListener("scroll", function() {
    if(scrollY > 230) {
        navigation.style.background = "linear-gradient(#fff 60%, transparent)";
    } else {
        navigation.style.background = "linear-gradient(#fff, transparent)"
    };
});
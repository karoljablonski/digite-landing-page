$("span.burger").on("click", function() {
    $("i.fa-bars, i.fa-times").toggleClass("turned-off")
    $(".main-nav-ul").toggleClass("active-hamburger")
});


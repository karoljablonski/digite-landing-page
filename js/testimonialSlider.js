//wtf this shit does XDDD

//zmienna określająca ilość pojedynczych elementow z klasa .single-refer
const referCount = $('.single-refer').length;

//zmienna określająca szerokość elementu .single-refer wraz z marginem LEFT i RIGHT
const referWidth = $('.single-refer').width() + $('.single-refer').offset().left + $('.single-refer').offset().right;

//zmienna określająca szerokość wrappera el. .single-refer, przy zalozeniu ze wrapper nie ma zadnych marginesow
const wrapperWidth = referCount * referWidth;

//funkcja wykonuje ruch w lewo
function moveLeft(){
    $('.references-wrapper').animate({left: '+= referWidth'}, 500, function(){
        $('.single-refer:last-child').prependTo('.references-wrapper');
        $('references.wrapper').css('left', '');
        console.log("clicked left");
    });
};
function moveRight(){
    $('.references-wrapper').animate({left: - referWidth}, 500, function(){
        $('.single-refer:first-child').appendTo('.references-wrapper');
        $('references.wrapper').css('left', '');
        console.log("clicked right");
    });
};
$('button.switchLeft').click(function() {moveLeft();
});
$('button.switchRight').click(function() {moveRight();
});
// setInterval(function(){moveRight()}, 3000);
//ustalenie poczatku odliczania
let activeElement = 0;
//ustalenie czasu wykonania funkcji
const timeChange = 4000;
//sciagniecie elem. na ktorych bedzie zmiana
const h1 = document.querySelector(".header-h1");
const h2 = document.querySelector(".header-h2");
const img = document.querySelector(".main-header");
//wpisanie do zmiennych tablic z elem. do zmiany
const h1content = ["we have a creative team", "we build amazing webpages"];
const h2content = ["Lorem ipsum dolor sit amet consectetur adipisicing elit.", "Sint modi eligendi consequuntur natus, perspiciatis deserunt."]
const image = ["rgba(0, 0, 0, 0.5) url(../img/header-1.jpg)", "rgba(0, 0, 0, 0.3) url(../img/header-2.jpg)"];
const sizeValue = 'cover';
const positionValue = 'center';
//funkcja powoduje: kolejne wywolanie zwieksza aE o 1, wpisując kolejne indeksy z tablic, gdy aE osiaga .length - zeruje się aE i w kók
function changeElement(){
    activeElement++;
    if(activeElement == h1content.length) {
        activeElement = 0;
    }
    h1.textContent = h1content[activeElement];
    h2.textContent = h2content[activeElement];
    //kod ponizej dziala!
    // img.style.background = image[activeElement];
    //teraz czeba ogarnac jak wrzucic cover na bgSize!!
    // img.style.backgroundSize = sizeValue;
    // img.style.backgroundPosition = positionValue;

    // setTimeout(changeElement, timeChange);
};
setInterval(changeElement, timeChange)

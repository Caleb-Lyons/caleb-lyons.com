// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper01 = document.querySelector("#g00");
const paper02 = document.querySelector("#g01");
const paper03 = document.querySelector("#g02");
const paper04 = document.querySelector("#g03");
const paper05 = document.querySelector("#g04");
const paper06 = document.querySelector("#g05");
const paper07 = document.querySelector("#g06");
const paper08 = document.querySelector("#g07");
const paper09 = document.querySelector("#g08");
const paper10 = document.querySelector("#g09");
const paper11 = document.querySelector("#g10");
const paper12 = document.querySelector("#g11");
const paper13 = document.querySelector("#g12");
const paper14 = document.querySelector("#g13");
const paper15 = document.querySelector("#g14");
const paper16 = document.querySelector("#g15");
const paper17 = document.querySelector("#g16");
const paper18 = document.querySelector("#g17");
const paper19 = document.querySelector("#g18");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 19;
let maxLocation = numOfPapers + 1;

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                paper01.classList.add("flipped");
                paper01.style.zIndex = 81;
                break;
            case 2:
                paper02.classList.add("flipped");
                paper02.style.zIndex = 82;
                break;
            case 3:
                paper03.classList.add("flipped");
                paper03.style.zIndex = 83;
                break;
            case 4:
                paper04.classList.add("flipped");
                paper04.style.zIndex = 84;
                break;
            case 5:
                paper05.classList.add("flipped");
                paper05.style.zIndex = 85;
                break;
            case 6:
                paper06.classList.add("flipped");
                paper06.style.zIndex = 86;
                break;
            case 7:
                paper07.classList.add("flipped");
                paper07.style.zIndex = 87;
                break;
            case 8:
                paper08.classList.add("flipped");
                paper08.style.zIndex = 88;
                break;
            case 9:
                paper09.classList.add("flipped");
                paper09.style.zIndex = 89;
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 90;
                break;
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 91;
                break;
            case 12:
                paper12.classList.add("flipped");
                paper12.style.zIndex = 92;
                break;
            case 13:
                paper13.classList.add("flipped");
                paper13.style.zIndex = 93;
                break;
            case 14:
                paper14.classList.add("flipped");
                paper14.style.zIndex = 94;
                break;
            case 15:
                paper15.classList.add("flipped");
                paper15.style.zIndex = 95;
                break;
            case 16:
                paper16.classList.add("flipped");
                paper16.style.zIndex = 96;
                break;
            case 17:
                paper17.classList.add("flipped");
                paper17.style.zIndex = 97;
                break;
            case 18:
                paper18.classList.add("flipped");
                paper18.style.zIndex = 98;
                break;
            case 19:
                paper19.classList.add("flipped");
                paper19.style.zIndex = 99;
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                paper01.classList.remove("flipped");
                paper01.style.zIndex = 98;
                break;
            case 3:
                paper02.classList.remove("flipped");
                paper02.style.zIndex = 97;
                break;
            case 4:
                paper03.classList.remove("flipped");
                paper03.style.zIndex = 96;
                break;
            case 5:
                paper04.classList.remove("flipped");
                paper04.style.zIndex = 95;
                break;
            case 6:
                paper05.classList.remove("flipped");
                paper05.style.zIndex = 94;
                break;
            case 7:
                paper06.classList.remove("flipped");
                paper06.style.zIndex = 93;
                break;
            case 8:
                paper07.classList.remove("flipped");
                paper07.style.zIndex = 92;
                break;
            case 9:
                paper08.classList.remove("flipped");
                paper08.style.zIndex = 91;
                break;
            case 10:
                paper09.classList.remove("flipped");
                paper09.style.zIndex = 90;
                break;
            case 11:
                paper10.classList.remove("flipped");
                paper10.style.zIndex = 89;
                break;
            case 12:
                paper11.classList.remove("flipped");
                paper11.style.zIndex = 88;
                break;
            case 13:
                paper12.classList.remove("flipped");
                paper12.style.zIndex = 87;
                break;
            case 14:
                paper13.classList.remove("flipped");
                paper13.style.zIndex = 86;
                break;
            case 15:
                paper14.classList.remove("flipped");
                paper14.style.zIndex = 85;
                break;
            case 16:
                paper15.classList.remove("flipped");
                paper15.style.zIndex = 84;
                break;
            case 17:
                paper16.classList.remove("flipped");
                paper16.style.zIndex = 83;
                break;
            case 18:
                paper17.classList.remove("flipped");
                paper17.style.zIndex = 82;
                break;
            case 19:
                paper18.classList.remove("flipped");
                paper18.style.zIndex = 81;
                break;
            case 20:
                paper19.classList.remove("flipped");
                paper19.style.zIndex = 80;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}
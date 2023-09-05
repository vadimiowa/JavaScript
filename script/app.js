/* //////////  LESSON 5  ////////// */
/* option 1 */
let num1 = 15;
let num2 = 5;

let res = num1 + num2;
console.log("Information: " + res);

/* option  2 */
let num3 = 20;
num3 += 50;
console.log("Information: " + num3);

/* option 3   / plus one number/ */
let num4 = 20;
num4 ++;
console.log("Information: " + num4);

/* option 4 */
let str1 = 100;
let str2 = 100 + 100;
console.log("Information: " + (str1 + str2));

/* TRANSFORM TEXT IN NUMBER */
let str3 = Number("100");
let str4 = Number("100");
console.log("Information: " + (str3 + str4));

/* Math */
console.log("Math: " + Math.PI);
console.log("Math: " + Math.min(40, 20, 50, 80, 90));
console.log("Math: " + Math.max(40, 20, 50, 80, 90));


/* //////////  LESSON 6  /if/else  ////////// */
let just = 15;
let isHouse = true;

if(just == 7 || isHouse) {
    console.log("information");
} else if(just > 10) {
    console.log("Error");
} else if(just < 6) {
    console.log("7!!!");
} else if(just == 80) {
    console.log("80/80/80!!!");
} else {
    console.log("Else");
}

/* option 2 */
let computerisation = 1000;
let option = true;

if(computerisation > 500 && option) {
    console.log("MAC IOS");
} else {
    console.log("WINDOWS");
}

/* option 3 */
let word = "word";

switch(word) {
    case "88":
      console.log("Super options 1");
      break;

    case "44":
      console.log("Super options 2");
      break;

    case "45":
      console.log("Super options 3");
      break;

    default:
        console.log("I need more knowledge in programming");
}

/* ////////////////// */
const mac = 1000;
const pro = true;

if(mac < 2000 && pro) {
    console.log("About MacBook: " + "macbook");
} else {
    console.log("About IPHONE: " + "IPHONE");
}


/* ////////// /  LESSON 7  / ARRAY / [] / ////////// */
let arr = [8, 10, 6, 90, 100, 40, "info", 1000];
arr[6] = "word";

console.log(arr);
console.log(arr[6]);
console.log(arr.length);

let matrix = [[100, 200], [300, 400], [500, 600], [700, 800]];
matrix[0] [1] = 500;
matrix[2] [1] = 100000;

console.log(matrix);


////////// /  LESSON 8  / CYCLES / for / //////////
for(let i = 100; i > 10; i /= 2) {
    /* console.log(i); */
}

for(i = 1; i <= 10; i++) {
    /* console.log(i); */
}

/* option 2 */
let j = 1000;
while(j >= 0) {
    /* console.log(j); */
    j -= 200;
}

let x = 1;
do {
   /* console.log(x); */
   x++;
} while(x <= 10);


for(let i = 10; i <= 20; i++) {
    if(i > 15)
    break;

    if(i % 2 == 0)
    continue;

    /* console.log(i); */
}

let arrOne = [100, 600, 5, 1000];

for(let i = 0; i < arrOne.length; i++) {
    arrOne[i] *= 2;
    /* console.log("info " + (i + 1) + ": " + arrOne[i]); */
}

let arrProject = [10, 30, 60, 90, 55, "interesting"];
arrProject[3] = 900000;

for(let i = 0; i < arrProject.length; i++) {
    /* console.log("Result " + i + ": " + arrProject[i]); */
}

for(let i = 100; i > 10; i -= 2) {
    /* console.log(i); */
}

for(let i = 100; i < 1601; i *= 2) {
    /* console.log(i); */
}

for(let i = 0; i <= 50; i++) {
   /*  console.log(i); */
}

/*/// I know, i need to learn JavaScript every day because it's very important programming language for me. ///*/

let arrName = [200, 800, 600, 500];
let classNameWindow = true;

for(let i = 0; i < arrName.length; i++) {
    let proObject = 5000;

    arrName[i] += 1000;
    arrName[i] += 1000;
    arrName[i] += proObject;
    /* console.log("ProjectName " + (i + 1) + ": " + arrName[i]); */

    if(i == arrName[i] && classNameWindow) {
    /*console.log("I need to learn English more regularly today");*/
    } else {
    /*console.log("000000000000000000000000000000000001 BTC");*/
    }
}

for(let i = 10; i <= 20; i++) {
    if(i % 2 == 0)
    continue;

    /* if(i > 12)
    break; */

    /* console.log(i); */
}


////////// /  LESSON 9  / WINDOW BY BROWSER  //////////
/* let infoLike = null;
if(confirm("What about you ?")) {
    infoLike = prompt("Enter your number");
    alert("It's so good");
    console.log(infoLike);
} else {
    alert("Okey");
} */


////////// /  LESSON 10  / FUNCTION  //////////
function info() {
    console.log("What time do you usually watch video lessons ?");
}

function blog(word) {
    console.log(word + "!");
}

function summa(a, b) {
    let res = a + b;
    blog(res);
}

//option1
function optionArrOne(arr) {
    let arrOne = 0;

    for(let i = 0; i < arr.length; i++) {
        arrOne += arr[i];
    }
    console.log(arrOne);
}

let silenseOne = [200, 500, 700, 800];
optionArrOne(silenseOne);

//option2
function optionArrTwo(array) {
    let arrTwo = 0;

    for(let i = 0; i < array.length; i++) {
        arrTwo += array[i];
    }
    return arrTwo;
}

let arrI = [700, 700];
let infoArrReturn = optionArrTwo(arrI);
console.log(infoArrReturn);

let silenseTwo = [500, 800, 600];
let infoArrReturnM = optionArrTwo(silenseTwo);
infoArrReturnM *= 2;
console.log(infoArrReturnM);


// integration function
function bnb(number) {
    console.log("Iphone " + number + " pro max");
}

function numO(a, b) {
    let uu = a + b;
    bnb(uu);
}
numO(7, 7);


////////// /  LESSON 11  / EVENT  //////////
let js = document.querySelector("#js");
let react = document.querySelector("#react");

document.querySelector("#js").addEventListener("click", function() {
    let techJS = document.querySelector(".technoleges__javascript");
    let techReact = document.querySelector(".technoleges__react");
    let techType = document.querySelector(".technoleges__typeScript");
    let techNode = document.querySelector(".technoleges__nodeJS");

    if(techJS.classList.add("active")) {

    } else {
        techJS.classList.remove("none");
        techReact.classList.remove("active");
        techType.classList.remove("active");
        techNode.classList.remove("active");
    }
})

document.querySelector("#react").addEventListener("click", function() {
    let techJS = document.querySelector(".technoleges__javascript");
    let techReact = document.querySelector(".technoleges__react");
    let techType = document.querySelector(".technoleges__typeScript");
    let techNode = document.querySelector(".technoleges__nodeJS");

    if(techReact.classList.add("active")) {

    } else {
        techJS.classList.add("none");
        techJS.classList.remove("active");
        techType.classList.remove("active");
        techNode.classList.remove("active");
    }
})

document.querySelector("#ts").addEventListener("click", function() {
    let techJS = document.querySelector(".technoleges__javascript");
    let techReact = document.querySelector(".technoleges__react");
    let techType = document.querySelector(".technoleges__typeScript");
    let techNode = document.querySelector(".technoleges__nodeJS");

    if(techType.classList.add("active")) {

    } else {
        techJS.classList.add("none");
        techJS.classList.remove("active");
        techReact.classList.remove("active");
        techNode.classList.remove("active");
    }
})

document.querySelector("#node").addEventListener("click", function() {
    let techJS = document.querySelector(".technoleges__javascript");
    let techReact = document.querySelector(".technoleges__react");
    let techType = document.querySelector(".technoleges__typeScript");
    let techNode = document.querySelector(".technoleges__nodeJS");

    if(techNode.classList.add("active")) {

    } else {
        techJS.classList.add("none");
        techJS.classList.remove("active");
        techReact.classList.remove("active");
        techType.classList.remove("active");
    }
})

////////// /  LESSON 12  / EVENT FORM //////////
// i need to create new interesting form for regrest
////////// /  WINDOW FUNCTION//////////
let press1 = document.querySelector(".img__press1");
let infoJs1 = document.querySelector(".windowAbout__info1");
press1.addEventListener("click", function() {
    infoJs1.classList.toggle("active");
    press1.classList.toggle("active");
    infoJs2.classList.remove("active");
    press2.classList.remove("active");
    infoJs3.classList.remove("active");
    press3.classList.remove("active");
})
let press2 = document.querySelector(".img__press2");
let infoJs2 = document.querySelector(".windowAbout__info2");
press2.addEventListener("click", function() {
    infoJs2.classList.toggle("active");
    press2.classList.toggle("active");
    infoJs1.classList.remove("active");
    press1.classList.remove("active");
    infoJs3.classList.remove("active");
    press3.classList.remove("active");
})
let press3 = document.querySelector(".img__press3");
let infoJs3 = document.querySelector(".windowAbout__info3");
press3.addEventListener("click", function() {
    infoJs3.classList.toggle("active");
    press3.classList.toggle("active");
    infoJs1.classList.remove("active");
    press1.classList.remove("active");
    infoJs2.classList.remove("active");
    press2.classList.remove("active");
})

////////// /  LESSON 12  / EVENT FORM //////////

function phone(arr) {
    let p = 0;

    for(let i = 0; i < arr.length; i++) {
        p += arr[i];
    }

    return p;
}

let corporation = [600, 500, 300, 460, 380]; //2240
let phoneArr = phone(corporation);
phoneArr *= 2;

//console.log(phoneArr);


/* document.querySelector(".gless").addEventListener("click", function() {
    let gless = document.querySelector(".gless");
    let glessTwo = document.querySelector(".glessTwo");

    if(gless.classList.contains("active")) {
        gless.classList.remove("active");
        glessTwo.classList.add("active");
    } else {
        gless.classList.add("active");
        glessTwo.classList.remove("active");
    }
}) */

////////// /  LESSON 13  / TIMERS AND INTERVELS //////////
// interval
let successful = setInterval(WhatAbout, 1000);

let m = 0;
function WhatAbout() {
    m++;
    /* console.log("info: " + m); */
    clearInterval(m == 5);
}

// timeout
let timeOut = setTimeout(newTime, 6000);

function newTime() {
    /* console.log("Hello world !!!"); */
}

// timeout
/* let blockRed = document.querySelector(".timeout");

setTimeout(function() {
    blockRed.classList.add("active");
}, 1500); */

////////// /  LESSON 14  / OBJECTS //////////
// Method
let date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth() + 1);

console.log("Time: " + date.getHours() + " Min: " + date.getMinutes());

let arrOb = [57, 66, 7, 8, 9, 0];
console.log(arrOb.sort());

// Class and object
class Person {
    constructor(name, age, happiness) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
    }

    info() {
        console.log("Man: " + this.name + " Age: " + this.age);
    }
}


let alex = new Person("Alex", 30, true);
let bob = new Person("Bob", 30, true);
console.log(alex.age);

alex.info();
bob.info();


/* MENU BURGER */
let burger = document.querySelector("#idBurger");
let nav = document.querySelector("#nav");
let plane = document.querySelector("#plane");
let backgroundHeader = document.querySelector(".header");
burger.addEventListener("click", function(e) {
    e.preventDefault();
    nav.classList.toggle("active");
    plane.classList.toggle("active");
})

plane.addEventListener("click", function() {
    nav.classList.remove("active");
    burger.classList.remove("active");
    plane.classList.remove("active");
    backgroundHeader.classList.remove("active");
})

burger.addEventListener("click", function() {
    burger.classList.toggle("active");
    backgroundHeader.classList.toggle("active");
})


document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll(".nav__link");

    for(let i = 0; i < links.length; i++)
        links[i].addEventListener("click", function(e) {
            e.preventDefault();
            nav.classList.remove("active");
            burger.classList.remove("active");
            plane.classList.remove("active");
            backgroundHeader.classList.remove("active");
        })

       // console.log(links);
})

function arrPmP(arr) {
    let b = 0;

    for(i = 0; i < arr.length; i++) {
        b += arr[i];
    }

    return b;
}

let infoAboutArr = [100, 600, 550, 340];
let infoAboutArr1 = [100, 600, 550, 340];
let infoAboutArr2 = [100, 600, 550, 340, 100, 600, 550, 340];
let resualtAboutIt = arrPmP(infoAboutArr);
resualtAboutIt *= 2;
console.log(resualtAboutIt);
// I want to continue


/* COURSE ABOUT ALGORITHMS */
// the algorithm is search
let arrayAlgori = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;
function linearSearch(arrayAlgori, item) {
    for(let i = 0; i < arrayAlgori.length; i++) {
        count += 1;
        if(arrayAlgori[i] == item) {
            return i;
        }
    }

    return null;
}

console.log(linearSearch(arrayAlgori, 11));
console.log(linearSearch(arrayAlgori, 4));
console.log(linearSearch(arrayAlgori, 5));


function justDO(arr) {
    let pm = 0;

    for(let i = 0; i < arr.length; i++) {
        pm += arr[i];
    }

    return pm;
}

let kkklll = [400, 500, 600, 700];


let fustDOM = justDO(kkklll);
console.log(fustDOM);



/* SOME ACCORDIONS */
/* ///////////////////////////////1////////////////////////////// */
const accordBoxes = document.querySelectorAll(".accord__box");

accordBoxes.forEach((item, index) => {
    let accordBotton = item.querySelector(".accord__bottom");
    accordBotton.addEventListener("click", function() {
        accordBotton.classList.toggle("active");

        let accordContent = item.querySelector(".accord__content");
        if(accordBotton.classList.contains("active")) {
            accordContent.style.maxHeight = accordContent.scrollHeight + "px";
        } else {
            accordContent.style.maxHeight = 0;
        }

        removeAccordContent(index);
    })
})

function removeAccordContent(index) {
    accordBoxes.forEach((item2, index2) => {
        if(index != index2) {
            item2.classList.remove("active");

            let removeBotton = item2.querySelector(".accord__bottom");
            removeBotton.classList.remove("active");
            let removeContent = item2.querySelector(".accord__content");
            removeContent.style.maxHeight = 0;
        }
    })
}

/* ///////////////////////////////2////////////////////////////// */
const moveBoxes = document.querySelectorAll(".move__box");

moveBoxes.forEach((item, index) => {
    let moveBotton = item.querySelector(".move__bottom");
    moveBotton.addEventListener("click", () => {
        moveBotton.classList.toggle("active");

        let moveContent = item.querySelector(".move__content");
        if(moveBotton.classList.contains("active")) {
            moveContent.style.maxHeight = moveContent.scrollHeight + "px";
        } else {
            moveContent.style.maxHeight = 0;
        }

        removeMoveContent(index);
    })
})

function removeMoveContent(index) {
    moveBoxes.forEach((item2, index2) => {
        if(index != index2) {
            item2.classList.remove("active");

            let removeBotton = item2.querySelector(".move__bottom");
            removeBotton.classList.remove("active");
            let removeContent = item2.querySelector(".move__content");
            removeContent.style.maxHeight = 0;
        }
    })
}

/* ///////////////////////////////3////////////////////////////// */
const accordBlackContent = document.querySelectorAll(".accordBlack__box");

accordBlackContent.forEach((item, index) => {
    let blackBotton = item.querySelector(".accordBlack__botton");
    blackBotton.addEventListener("click", () => {
        blackBotton.classList.toggle("active");

        let blackContent = item.querySelector(".accordBlack__content");
        if(blackBotton.classList.contains("active")) {
            blackContent.style.maxHeight = blackContent.scrollHeight + "px";
        } else {
            blackContent.style.maxHeight = 0;
        }

        removeContent(index);
    })
})

function removeContent(index) {
    accordBlackContent.forEach((item2, index2) => {
        if(index != index2) {
            item2.classList.remove("active");

            let box = item2.querySelector(".accordBlack__botton");
            box.classList.remove("active");
            let content = item2.querySelector(".accordBlack__content");
            content.style.maxHeight = "0px";
        }
    })
}

/* LIGHT LIGHT LIGHT */
let navigation = document.querySelectorAll(".nav__link");
let light = document.querySelector(".nav__light");
let planeOne = document.querySelector(".plane");
let body = document.querySelector("body");
let buttonMenu = document.querySelector(".buttonMenu");
light.addEventListener("click", function() {
    light.classList.toggle("active");

    for(let i = 0; i < navigation.length; i++) {

        if(light.classList.contains("active")) {
            navigation[i].style.color = "#fff";
            planeOne.style.backgroundColor = "#00000073";
            body.style.backgroundColor = "#000000ab";
            buttonMenu.style.backgroundColor = "#6e7347";
            nav.classList.add("blackColor");
        } else {
            navigation[i].style.color = "#000";
            planeOne.style.backgroundColor = "#ffffff69";
            body.style.backgroundColor = "#96b3b9db";
            nav.classList.remove("blackColor");
            buttonMenu.style.backgroundColor = "#ffffffd9";
        }
    }
})



























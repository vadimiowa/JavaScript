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
let str2 = 100;
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

let pressI = 0;
function press(el) {
    pressI++;
    el.innerHTML = "PRESS " + pressI;
}

function again(arr) {
    let m = 0;

    for(let i = 0; i < arr.length; i++) {
        m += arr[i];
    }
    return m;
}

let before = [400, 600, 800];
let ghg = again(before);
ghg *= 2;

console.log(ghg);




















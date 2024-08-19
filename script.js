const sideBar = document.getElementById("sideBar");
const homeP = document.getElementById("homePg");
const lofiP = document.getElementById("lofiPg");
const rainP = document.getElementById("rainPg");
const homeBtn = document.getElementById("homeBtn");
const lofiBtn = document.getElementById("lofiBtn");
const rainBtn = document.getElementById("rainBtn");
const navOpenBtn = document.getElementById("navOpenBtn");
const navCloseBtn = document.getElementById("navCloseBtn");

let indexCounter = 3;

homeBtn.onclick = function(){
    indexCounter++
    homeP.style.zIndex = `${indexCounter}`;
    lofiP.style.display = "none";
    rainP.style.display = "none";
    homeP.style.display = "grid";
}

lofiBtn.onclick = function(){
    indexCounter++
    lofiP.style.zIndex = `${indexCounter}`;
    homeP.style.display = "none";
    rainP.style.display = "none";
    lofiP.style.display = "grid";
}

rainBtn.onclick = function(){
    indexCounter++
    rainP.style.zIndex = `${indexCounter}`;
    lofiP.style.display = "none";
    homeP.style.display = "none";
    rainP.style.display = "grid";
}

navOpenBtn.onclick = function(){
    sideBar.style.left = "0";
    sideBar.style.transition = "0.7s";
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "initial";
    indexCounter++;
    sideBar.style.zIndex = `${indexCounter}`;
}

navCloseBtn.onclick = function(){
    sideBar.style.left = "-50%";
    navCloseBtn.style.display = "none";
    navOpenBtn.style.display = "initial";
    indexCounter++;
    sideBar.style.zIndex = `${indexCounter}`;
}

// Dark Mode functions

const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

function setDefault() {
    sun.style.border = "1px solid black";
    moon.style.border = "none";
    moon.style.backgroundColor = "rgba(255, 255, 255, 0.226)";
    sun.style.backgroundColor = "rgba(240, 248, 255, 0.7)"
}

function setDarkMode() {
    moon.style.border = "1px solid black";
    sun.style.border = "none";
    sun.style.backgroundColor = "rgba(255, 255, 255, 0.226)";
    moon.style.backgroundColor = "rgba(240, 248, 255, 0.7)"
    
}
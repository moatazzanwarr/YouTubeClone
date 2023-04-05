var prAside = document.getElementById("pr-aside");
var aside = document.getElementById("aside");
var main = document.querySelector("main");

function openn(){
    prAside.style.width = "100%";
    aside.style.width = "200px";
    main.style.marginRight = "100px";
}

function closee(){
    prAside.style.width = "0px";
    aside.style.width = "0px";
    main.style.marginRight = "0px";
}
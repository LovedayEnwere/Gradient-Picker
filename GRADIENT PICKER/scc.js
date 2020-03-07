/*var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

color1.addEventListener("input",function(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
})
color2.addEventListener("input",function(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
})*/

/*this is the same code as the one above
but this time i used functions to shorten the code*/


var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

function changeBackground(){
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent=body.style.background+";";
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input",changeBackground);
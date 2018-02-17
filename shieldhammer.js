 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var colors = ["cyan","green","gray","blue"];
var cIndex = 0;

function initBackground() {
    for (var i = 0 ; i < colors.length ; i += 3) {
        colors.splice(i,0,"light"+colors[i]);
        colors.splice(i+2,0,"dark"+colors[i+1]);
    } // colors === ["lightcyan","cyan","darkcyan","lightgreen","green","darkgreen"...
    var bg=document.getElementById("battlefield");
    bg.style.backgroundColor = colors[randomArryInteger(colors.length)];
};

function Weapon(x) {
    this.image = x;
    var s = this.image.style;
    this.left = parseInt(s.left.slice(0,-2));
    this.width = parseInt(s.fontSize.slice(0,-2));
    this.move = function (n) {
        this.left += n;
        this.image.style.left = this.left + "px";
    };
};

// Entry point
window.onload = entryPoint;

function entryPoint() {    
    initBackground();
    clash.initWeapons();
    var T = 1000 / 50;
    clash.timer = setInterval(clash.animate,T);
    
    initMyDOM();
    
};
 class Clash 
 {
   var sh;
 };
//var clash = {shield:undefined, mjolnir:undefined};
clash.timer = undefined;

clash.initWeapons = function () {
    var sh = document.getElementById("capshield");
    clash.shield = new Weapon(sh);
    var mj = document.getElementById("mjolnir");
    clash.mjolnir = new Weapon(mj);
};

clash.animate = function () {
    clash.advanceWeapons();
    clash.changeBackgroungColor();
};

clash.advanceWeapons = function () {
    clash.shield.move(1);
    clash.mjolnir.move(-2);
    var sh = clash.shield, mj = clash.mjolnir;
    if (sh.left + sh.width / 2 > mj.left)
        clearInterval(clash.timer);
};

clash.changeBackgroungColor = function () {
    var period;
    var sh = clash.shield, mj = clash.mjolnir;
    if (sh.left + 2 * sh.width > mj.left)
        period = 1;
    else
        period = 20;
    if (sh.left % period === period - 1) {
        cIndex = (cIndex + 7) % colors.length;
        var bg = document.getElementById("battlefield");
        bg.style.backgroundColor = colors[cIndex];
    }
};

function randomArryInteger(x) {
    return Math.floor(Math.random() * x);   
};

function initMyDOM(){
    
    //capshield
    var bgC = document.getElementById("capshield");
    var divC1 = document.createElement("div");
    var attC = document.createAttribute("class");
    var attC2 = document.createAttribute("style");
    attC.value = "superweapon";
    attC2.value = "top: 270px; left: 0px; font-size: 60px";
    
    bgC.appendChild(divC1);
    divC1.setAttributeNode(attC);
    divC1.setAttributeNode(attC2);
    //bgC.appendChild(divC1);
    
    var letterO = document.createTextNode("O");
    bgC.appendChild(letterO);
    
    //mjolnir
    var bgM = document.getElementById("mjolnir");
    var divM1 = document.createElement("div");
    var attM = document.createAttribute("class");
    var attM2 = document.createAttribute("style");
    attM.value = "superweapon";
    attM2.value = "top: 280px; left: 760px; font-size: 40px; transform: rotate(270deg)";
    
    divM1.setAttributeNode(attM);
    divM1.setAttributeNode(attM2);
    bgM.appendChild(divM1);
    
    var letterT = document.createTextNode("T");
    bgM.appendChild(letterT);
}

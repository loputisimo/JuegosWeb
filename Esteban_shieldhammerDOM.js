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
    var cIndex=randomArrayIndex(colors);
    var bg=document.getElementById("battlefield");
    bg.style.backgroundColor = colors[cIndex];
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
    initMyDom();
    initBackground();
    clash.initWeapons();
    var T = 1000 / 50;
    clash.timer = setInterval(clash.animate,T);
};

var clash = {shield:undefined, mjolnir:undefined};
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

function randomArrayIndex(x){
    var decIndex = Math.random() * x.length;
    decIndex = Math.floor(decIndex);
    return decIndex;
};
function initMyDom(){
    
    var bg=document.getElementById("battlefield");
    var div1= document.createElement("div");
    
    var c=document.createAttribute("class");
    c.value="superheroweapon";
    div1.setAttributeNode(c);
    
    var att=document.createAttribute("id");
    att.value="capshield";
    div1.setAttributeNode(att);
    
    var letter1=document.createTextNode("O");
    div1.appendChild(letter1);
    
    var st2=document.createAttribute("style");
    st2.value="top: 270px; left: 0px; font-size: 60px;";
    div1.setAttributeNode(st2);
    
    bg.appendChild(div1);
    
    var div2=document.createElement("div");
    
    var c1=document.createAttribute("class");
    c1.value="superheroweapon";
    div2.setAttributeNode(c1);
    
    var att2=document.createAttribute("id");
    att2.value="mjolnir";
    div2.setAttributeNode(att2);
    
    var letterT=document.createTextNode("T");
    div2.appendChild(letterT);
    
    var st=document.createAttribute("style");
    st.value="top: 280px; left: 760px; font-size: 40px; transform: rotate(270deg);";
    div2.setAttributeNode(st);
    

    
    bg.appendChild(div2);
    
   
    
    
    
    
    bg.appendChild(div1);
    

    
    
    
};

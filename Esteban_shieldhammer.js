/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Clash {
    constructor() {
        this.shield = undefined;
        this.mjolnir = undefined;
        this.timer = undefined;
    }
    get initWeapons() {
        var sh = document.getElementById("capshield");
        this.shield = new Weapon(sh);
        var mj = document.getElementById("mjolnir");
        this.mjolnir = new Weapon(mj);
    }
   
     get advanceWeapons() {
        this.shield.move(1);
        this.mjolnir.move(-2);
        var sh = this.shield, mj = this.mjolnir;
        if (sh.left + sh.width / 2 > mj.left)
            clearInterval(this.timer);
    }
     get changeBackgroungColor() {
        var period;
        var sh = this.shield, mj = this.mjolnir;
        if (sh.left + 2 * sh.width > mj.lefºt)
            period = 1;
        else
            period = 20;
        if (sh.left % period === period - 1) {
            cIndex = (cIndex + 7) % colors.length;
            var bg = document.getElementById("battlefield");
            bg.style.backgroundColor = colors[cIndex];
        }
    }
       get animate() {
        this.advanceWeapons();
        this.changeBackgroungColor();
    }
    }

var colors = ["cyan", "green", "gray", "blue"];
var cIndex = 0;

var clash = new Clash();

window.onload = entryPoint;

function entryPoint() {
    initBackground();
    clash.initWeapons();
    var T = 1000 / 50;
    clash.timer = setInterval(clash.animate, T);

}
;

function initBackground() {
    for (var i = 0; i < colors.length; i += 3) {
        colors.splice(i, 0, "light" + colors[i]);
        colors.splice(i + 2, 0, "dark" + colors[i + 1]);
    } // colors === ["lightcyan","cyan","darkcyan","lightgreen","green","darkgreen"...
    var cIndex = randomArrayIndex(colors);
    var bg = document.getElementById("battlefield");
    bg.style.backgroundColor = colors[cIndex];
}
randomArrayIndex = function (x) {
    var decIndex = Math.random() * x.length;
    decIndex = Math.floor(decIndex);
    return decIndex;
};
Weapon = function (x) {
    this.image = x;
    var s = this.image.style;
    this.left = parseInt(s.left.slice(0, -2));
    this.width = parseInt(s.fontSize.slice(0, -2));
    this.move = function (n) {
        this.left += n;
        this.image.style.left = this.left + "px";
    };
};







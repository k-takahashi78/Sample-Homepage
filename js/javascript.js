var myh1 = document.getElementById("body-container");

var myfunc = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "0";
}
var myfunc1 = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "1";
}
var myfunc2 = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "2";
}
var myfunc3 = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "3";
}
var myfunc4 = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "4";
}
var myfunc5 = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "5";
}
var myfunc6 = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "6";
}
var myfunc7 = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "7";
}
var myfunc8 = function(){
  myh1 = document.getElementById("body-container");
      myh1.innerHTML = "8";
}

// フェードアウトの関数
function fadeOut(){
  var boxOpa = parseFloat(box.style.opacity);
  var opaValue = .05;
  var limit = 0.5;

   if(boxOpa > limit){
     boxOpa = boxOpa - opaValue;
     box.style.opacity = boxOpa;
     requestAnimationFrame(fadeOut);
   }
}

// フェードインの関数
function fadeIn(){
  var boxOpa = parseFloat(box.style.opacity);
  var opaValue = .05;

   if(boxOpa < 1){
     boxOpa = boxOpa + opaValue;
     box.style.opacity = boxOpa;
     requestAnimationFrame(fadeIn);
   }
}

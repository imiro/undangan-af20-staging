/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : https://www.greensock.com/
*/
TweenLite.set("#bg-placeholder-daun",{perspective:600})
// TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = 20;
var warp = document.getElementById("bg-placeholder-daun"),	w = window.innerWidth , h = window.innerHeight;
console.log(w, h)

 for (i=0; i<total; i++){
   var Div = document.createElement('div');
   TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w-150),y:R(-200,-150),z:R(-200,200)});
   warp.appendChild(Div);
   animm(Div);
 }

 function animm(elm){
   TweenMax.to(elm,R(6,15),{y:h-10,ease:Linear.easeNone,repeat:-1,delay:-15});
   TweenMax.to(elm,R(4,8),{x:"+=90",rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
   TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

function R(min,max) {return min+Math.random()*(max-min)};


// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW

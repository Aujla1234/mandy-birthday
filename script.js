/* =====================================================
   MANDY BIRTHDAY WEBSITE
   SCRIPT FILE

   The Sister I Never Had ❤️
===================================================== */


/* =====================================
   AOS INITIALIZE
===================================== */

AOS.init({

    duration:1200,

    once:true,

    easing:"ease-out"

});




/* =====================================
   LOADING SCREEN
===================================== */


window.addEventListener("load",()=>{


    const loader=document.getElementById("loader");


    setTimeout(()=>{


        loader.style.transition="1s";


        loader.style.opacity="0";


        setTimeout(()=>{


            loader.style.display="none";


        },1000);



    },4000);



});






/* =====================================
   BACKGROUND MUSIC
===================================== */


const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");


let musicPlaying=false;



musicBtn.addEventListener("click",()=>{


    if(!musicPlaying){


        music.play();


        musicPlaying=true;


        musicBtn.innerHTML=

        '<i class="fa-solid fa-pause"></i>';



    }

    else{


        music.pause();


        musicPlaying=false;


        musicBtn.innerHTML=

        '<i class="fa-solid fa-music"></i>';



    }



});







/* =====================================
   START MUSIC AFTER FIRST CLICK
===================================== */


document.body.addEventListener(

"click",

()=>{


if(!musicPlaying){


    music.volume=.35;


}


},

{

once:true

}

);







/* =====================================
   ENVELOPE OPENING
===================================== */


const envelope=

document.querySelector(".envelope");


const letter=

document.querySelector(".letter");



let opened=false;



envelope.addEventListener("click",()=>{


opened=!opened;



if(opened){


letter.style.opacity="1";


letter.style.transform=

"translateY(-200px)";



}

else{


letter.style.opacity="0";


letter.style.transform=

"translateY(100px)";



}



});







/* =====================================
   SECRET MESSAGE
===================================== */


const secretHeart=

document.getElementById("secretHeart");


const secretMessage=

document.getElementById("secretMessage");



secretHeart.addEventListener("click",()=>{


secretMessage.classList.add("show");



confetti({

    particleCount:150,

    spread:100,

    origin:{y:.7}

});



});






/* =====================================
   BROTHER PROMISE SIGNATURE
===================================== */


const promiseBtn=

document.getElementById("acceptPromise");


const signature=

document.getElementById("signature");



promiseBtn.addEventListener("click",()=>{


signature.style.opacity="1";



promiseBtn.innerHTML=

"Promise Accepted ❤️";



confetti({

particleCount:200,

spread:120

});



});








/* =====================================
   FLOATING HEART GENERATOR
===================================== */


function createHeart(){



const heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";



heart.style.left=

Math.random()*100+"vw";



heart.style.animationDuration=

(5+Math.random()*5)+"s";



heart.style.fontSize=

(15+Math.random()*30)+"px";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},10000);



}



setInterval(createHeart,800);





/* =====================================
   CURSOR GLOW EFFECT
===================================== */


const cursorGlow = document.createElement("div");


cursorGlow.className="cursor-glow";


document.body.appendChild(cursorGlow);



document.addEventListener("mousemove",(e)=>{


cursorGlow.style.left=

e.clientX-12+"px";


cursorGlow.style.top=

e.clientY-12+"px";



});







/* =====================================
   MOUSE PARALLAX MOON
===================================== */


const moon=document.getElementById("moon");



document.addEventListener("mousemove",(e)=>{


let x=

(e.clientX/window.innerWidth-.5)*30;


let y=

(e.clientY/window.innerHeight-.5)*30;



moon.style.transform=

`translate(${x}px,${y}px)`;


});







/* =====================================
   RANDOM SHOOTING STARS
===================================== */


function createShootingStar(){



const star=document.createElement("div");


star.className="shooting-star";



star.style.position="fixed";


star.style.top=

Math.random()*50+"vh";



star.style.left=

Math.random()*100+"vw";



star.style.width="120px";


star.style.height="2px";



star.style.background=

"linear-gradient(90deg,white,transparent)";



star.style.transform=

"rotate(-45deg)";



star.style.zIndex="-1";



star.style.animation=

"shoot 1s linear";



document.body.appendChild(star);



setTimeout(()=>{


star.remove();


},1000);



}



setInterval(createShootingStar,4000);








/* =====================================
   GIFT BOX OPENING
===================================== */


const giftBox=

document.getElementById("giftBox");


const giftMessage=

document.querySelector(".gift-message");



let giftOpened=false;



giftBox.addEventListener("click",()=>{


giftOpened=!giftOpened;



if(giftOpened){


giftBox.style.transform=

"rotateX(40deg) scale(1.2)";



giftMessage.style.opacity="1";


giftMessage.style.transform=

"translateY(0)";



confetti({

particleCount:250,

spread:140,

origin:{y:.6}

});



}

});








/* =====================================
   FIREWORKS SYSTEM
===================================== */


const fireworkButton=

document.getElementById("fireworkButton");



const fireworksContainer=

document.getElementById("fireworks");





fireworkButton.addEventListener("click",()=>{


launchFireworks();



});







function launchFireworks(){



for(let i=0;i<10;i++){


setTimeout(()=>{


confetti({


particleCount:100,


spread:360,


startVelocity:45,


origin:{


x:Math.random(),


y:Math.random()*.5


}


});



},i*300);



}



fireworkButton.innerHTML=

"Happy Birthday Mandy ❤️";



}








/* =====================================
   IMAGE LIGHTBOX
===================================== */


const images=

document.querySelectorAll(".gallery-grid img");



images.forEach(img=>{


img.addEventListener("click",()=>{


const overlay=

document.createElement("div");


overlay.style.position="fixed";


overlay.style.inset="0";


overlay.style.background=

"rgba(0,0,0,.85)";


overlay.style.display=

"flex";


overlay.style.justifyContent=

"center";


overlay.style.alignItems=

"center";


overlay.style.zIndex="9999";



const bigImage=

document.createElement("img");


bigImage.src=

img.src;


bigImage.style.maxWidth="90%";


bigImage.style.maxHeight="90%";


bigImage.style.borderRadius="20px";


bigImage.style.boxShadow=

"0 0 60px #ff70c7";



overlay.appendChild(bigImage);


document.body.appendChild(overlay);



overlay.addEventListener("click",()=>{


overlay.remove();


});



});



});







/* =====================================
   SMOOTH SCROLL BUTTONS
===================================== */


document.querySelectorAll("button").forEach(btn=>{


btn.addEventListener("mouseenter",()=>{


btn.style.transform=

"scale(1.05)";



});



btn.addEventListener("mouseleave",()=>{


btn.style.transform=

"scale(1)";


});


});








/* =====================================
   ADD SHOOTING STAR CSS
===================================== */


const style=document.createElement("style");


style.innerHTML=`

@keyframes shoot{

from{

transform:
translate(0,0)
rotate(-45deg);

opacity:1;

}


to{

transform:
translate(-500px,500px)
rotate(-45deg);

opacity:0;

}

}

`;



document.head.appendChild(style);







/* =====================================
   FINAL CONSOLE MESSAGE
===================================== */


console.log(`

❤️ Happy Birthday Mandy ❤️

Made with love by Cj.

"The sister life never gave me."

`);

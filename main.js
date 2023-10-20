const home = document.querySelector(".home");
let i = 10;

setInterval(()=>{
    i+= 10;
    home.style = `font-size: ${i}px`;
}, 1000);

const home2 = document.querySelector(".home2");
let i2 = 50;

setInterval(()=>{
    i2 += 30;
    home2.style = `font-size: ${i2}px`;
}, 2000);

const home3 = document.querySelector(".home3");
let i3 = 100;

setInterval(()=> {
    i3 -= 10;
    home3.style = `font-size: ${i3}px`;
},1000);
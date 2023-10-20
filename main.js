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
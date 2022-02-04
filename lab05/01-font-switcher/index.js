var content_size = parseFloat(window.getComputedStyle(document.querySelector(".content")).fontSize);
var header_size = parseFloat(window.getComputedStyle(document.querySelector("h1")).fontSize);


const makeBigger = () => {
   // alert('make bigger!');
   content_size *= 1.1;
   header_size *= 1.1;
   document.querySelector("div.content").style.fontSize = content_size + "px";
   document.querySelector("h1").style.fontSize = header_size + "px";
};

const makeSmaller = () => {
   // alert('make smaller!');
   content_size /= 1.1;
   header_size /= 1.1;
   document.querySelector("div.content").style.fontSize = content_size + "px";
   document.querySelector("h1").style.fontSize = header_size + "px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

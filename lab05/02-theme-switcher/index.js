/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultTheme = () => {
   // alert("default")
   document.querySelector("body").className = "default"
};

const desertTheme = () => {
   // alert("desert")
   document.querySelector("body").className = "desert"
};

const oceanTheme = () => {
   // alert("ocean")
   document.querySelector("body").className = "ocean"
};

const high_contrastTheme = () => {
   // alert("high-contrast")
   document.querySelector("body").className = "high-contrast"
};


document.querySelector("#default").addEventListener('click', defaultTheme);
document.querySelector("#desert").addEventListener('click', desertTheme);
document.querySelector("#ocean").addEventListener('click', oceanTheme);
document.querySelector("#high-contrast").addEventListener('click', high_contrastTheme);
/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
var dys = False;

const dyslexiaMode = () => {
  dys = !dys;
  if (dys) {
    document.querySelector("body").className = "dyslexia-mode"
  }
};


document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaMode);
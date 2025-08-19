const backToTop = document.getElementById("backtotop");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  let start = 200;
  let end   = 400; 

  let opacity = 0;

  if (scroll <= start) {
    opacity = 0;  
  } else if (scroll >= end) {
    opacity = 1;  
  } else {
    opacity = (scroll - start) / (end - start);
  }

  backToTop.style.opacity = opacity;
});
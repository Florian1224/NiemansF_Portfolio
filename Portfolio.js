// Woorden carousel
let woordenArray = ["Graphic Design","Logo Design","Webdesign","Illustrations","Animations"];
let mijnTitel = document.querySelector("h1");
let currentWord = -1;

  function woordenCarousel() {
    currentWord ++;
    if (currentWord == woordenArray.length)
    currentWord = 0;
    mijnTitel.textContent = woordenArray[currentWord];
  }

setInterval(woordenCarousel, 1000);


//slideshow
let slideIndex = [1,1];
let slideId = ["mijnSlides", "mijnSlides2"]
showSlides(1, 0);
showSlides(1, 1);

function volgendeSlide(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}

// Coördinaten van muis:
let mijnMuis= document.querySelector(".muisTracker");

window.addEventListener("mousemove", function(event) {
  mijnMuis.innerHTML = "Mousetracker: X=" + event.pageX + "px Y=" + event.pageY + "px";
});

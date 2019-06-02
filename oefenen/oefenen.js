

let mijnParagraaf = document.querySelector(".mijnMuis");

window.addEventListener("mousemove", function(event) {
  mijnParagraaf.innerHTML = "Muiscoördinaten: X=" + event.pageX + "px, Y=" + event.pageY + "px";
});


let mijnDiv = document.querySelector("div");
let maxToLeft = window.innerWidth - 150;
  window.addEventListener("scroll", function() {
    mijnDiv.style.bottom = "-" + (window.pageYOffset/10) + "rem";
    if (window.pageYOffset > maxToLeft) {
      mijnDiv.style.left = 0;
      mijnDiv.style.backgroundColor = "red";
    } else {
      mijnDiv.style.left = "";
      mijnDiv.style.backgroundColor = "";
      mijnDiv.style.right = (window.pageYOffset/10) + "rem";
    }
  });

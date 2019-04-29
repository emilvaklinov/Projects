
var controls = document.querySelectorAll(".controls");
for (var i = 0; i < controls.length; i++) {
  controls[i].style.display = "inline-block";
}

var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2100);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = "slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slide showing";
}

var playing = true;
var pauseButton = document.getElementById("pause");

function pauseSlideshow() {
  pauseButton.innerHTML = "&#9658;"; // play character
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = "&#10074;&#10074;"; // pause character
  playing = true;
  slideInterval = setInterval(nextSlide, 2100);
}

pauseButton.onclick = function() {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};

function leftArrowPressed() {
  // my stuff here
  //document.getElementById("previous").onkeypress = ;
}

function rightArrowPressed() {
  // my stuff here
 // document.getElementById("next").onkeypress = ;
}

document.onkeydown = function(evt) {
   evt = evt || window.event;
   switch (evt.keyCode) {
       case 37:
           leftArrowPressed();
           break;
       case 39:
           rightArrowPressed();
           break;
   }
};


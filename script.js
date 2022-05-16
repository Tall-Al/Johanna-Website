/**** Gallery ****/

const char1Button = document.getElementById("breakfast-board");
const char2Button = document.getElementById("classic-board");
const char3Button = document.getElementById("pnw-board");
const char4Button = document.getElementById("sweetGallery");
const char5Button = document.getElementById("pickleGallery");
const char6Button = document.getElementById("honeyGallery");
const char7Button = document.getElementById("nutGallery");
const char8Button = document.getElementById("loveGallery");

const xButton = document.getElementById('close-button');

// Open Gallery function

const mainImage = document.getElementById("Main");

function show() {
const slideshowDiv = document.getElementById("slideshow").style.display = "inherit";
const mainGal = document.getElementById("mainGal").style.display = "none";
const imgGal = document.getElementById("imageGallery").style.display = "inherit";
// const slide = document.getElementById("slideshow").style.display = "inherit";
const slide = document.getElementsByClass("slideshow-container").style.display = "inherit";
const grid = document.getElementById("bodyGal").classList.add("overlay");
};

 /********Slideshow********/ 
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
};


/***** X Button *****/

function xClose() {
  const slideshowDiv = document.getElementById("slideshow").style.display = "none";

  const mainGal = document.getElementById("mainGal").style.display = "block";
  const imgGal = document.getElementById("imageGallery").style.display = "none";
  const slide = document.getElementsByClassName("slideshow-container").style.display = "none";
  const grid = document.getElementById("bodyGal").classList.remove("overlay");
 
 
};

xButton.onclick = xClose;
/*********Gallery Functions*********/

function galleryFunc0() {
  let Image_Id1 = document.getElementById('slide1');
  let Image_Id2 = document.getElementById('slide2');
  let Image_Id3 = document.getElementById('slide3');
  if (char1Button.onclick) {
      Image_Id1.src = "/images/Char4.jpeg";
      Image_Id2.src = "/images/Char5.jpeg";
      Image_Id3.src = "/images/Char6.jpeg";
      show();
  }
  else {
      Image_Id1.src = "/images/Char2.jpeg";
  }
};

char1Button.onclick = galleryFunc0; // This is working, but make it work for each gallery or make my old code work...

function galleryFunc1() {
  let Image_Id1 = document.getElementById('slide1');
  let Image_Id2 = document.getElementById('slide2');
  let Image_Id3 = document.getElementById('slide3');
  if (char2Button.onclick) {
      Image_Id1.src = "/images/small_Breakfast_Board/brek1.jpeg";
      Image_Id2.src = "/images/Char2.jpeg";
      Image_Id3.src = "/images/Char3.jpeg";
      show();
  }
  else {
      Image_Id1.src = "/images/Char2.jpeg";
  }
  
};

char2Button.onclick = galleryFunc1;

function galleryFunc2() {
  let Image_Id1 = document.getElementById('slide1');
  let Image_Id2 = document.getElementById('slide2');
  let Image_Id3 = document.getElementById('slide3');
  if (char3Button.onclick) {
      Image_Id1.src = "/images/Char1.jpeg";
      Image_Id2.src = "/images/Char2.jpeg";
      Image_Id3.src = "/images/Char3.jpeg";
      show();
  }
  else {
      Image_Id1.src = "/images/Char2.jpeg";
  }
  
};

char3Button.onclick = galleryFunc2;
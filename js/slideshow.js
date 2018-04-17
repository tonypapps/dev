// carousel
var i = 0;
var images =
[
  'urraca',
  'thejames',
  'snow-flatirons',
  'tott-sunset',
  'fourth-of-july',
  'fall-leaf',
  'inspiration-point',
  'florida-boat'
];
var carousel = document.getElementById('carousel');

function slideshow(){

  if (i >=images.length) {
    //reset i to 0
    i = 0;
    carousel.style.backgroundImage = "url(img/carousel/" + images[i] + ".jpg)";
  } else if (i < 0) {
    i = images.length -1;
    carousel.style.backgroundImage = "url(img/carousel/" + images[i] + ".jpg)";

  }else {
    carousel.style.backgroundImage = "url(img/carousel/" + images[i] + ".jpg)";
  }

}
function nextImage(){
  i++;
  slideshow();
}

function previousImage(){
  i--;
  slideshow();

}
slideshow();

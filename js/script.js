// javascript


// jquery
$(document).ready(function () {

  // fake loader strt
  $.fakeLoader({
    timeToHide: 4000,
    bgColor: "#31eb9e",
    spinner: "spinner3"
  });
  // fake loader end

  // bg-particles plguin strt
  $('#container').daisyjs({
  });

  daisyjs(document.getElementById('container'), {
    density: 10000, // how many particles will be generated: one particle every n pixels
    dotColor: '#666666',
    lineColor: '#666666',
    particleRadius: 7, // dot size
    lineWidth: 1,
    curvedLines: false,
    proximity: 100, // how close two dots need to be before they join
  });
  // bg-particles plguin end

  // parallax plugin
  $('.parallax-window').parallax({
    naturalWidth: 1600,
    naturalHeight: 400
  });

  // simple plugin strt
  $('.parallax').parallaxBackground({
    parallaxBgPosition: 'center center'

  });
  // 1st img
  var image = document.getElementsByClassName('thumbnail');
  new simpleParallax(image, {
    orientation: 'right'
  });
  // 2nd img
  var image = document.getElementsByClassName('thumbnail2');
  new simpleParallax(image, {
    orientation: 'left'
  });
  // 3rd img
  var image = document.getElementsByClassName('thumbnail3');
  new simpleParallax(image, {
    orientation: 'up'
  });
  // 4th img
  var image = document.getElementsByClassName('thumbnail4');
  new simpleParallax(image, {
    delay: .7,
    transition: 'cubic-bezier(0,0,0,1)'
  });
  //  5th & 6th img 
  var image = document.getElementsByClassName('thumbnail5');
  new simpleParallax(image, {
    overflow: true
  });
  // simple plugin end

  // carousel plugin strt  
  $.as({
    id: "demo",
    folder: "/vendor/accordion-slider/images",
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    imgWidth: 700,
    speed: 2000,
  });
  // carousel plugin end
  
  // lightbox strt
var gallery = $('.gallery a').simpleLightbox({
  // default source attribute
sourceAttr: 'href',

// shows fullscreen overlay
overlay: true,

// shows loading spinner
spinner: true,

// shows navigation arrows
nav: true,

// text for navigation arrows
navText: ['&larr;','&rarr;'],

// shows image captions
captions: true,
captionDelay: 0,
captionSelector: 'img',
captionType: 'attr',
captionPosition: 'bottom',
captionClass: '',
captionHTML: false,

// captions attribute (title or data-title)
captionsData: 'title',

// shows close button
close: true,

// text for close button
closeText: 'X',

// swipe up or down to close gallery
swipeClose: true,

// show counter
showCounter: true,

// file extensions
fileExt: 'png|jpg|jpeg|gif',

// weather to slide in new photos or not, disable to fade
animationSlide: true,

// animation speed in ms
animationSpeed: 250,

// image preloading
preloading: true,

// keyboard navigation
enableKeyboard: true,

// endless looping
loop:  true,

// group images by rel attribute of link with same selector
rel: false,

// closes the lightbox when clicking outside
docClose:  true,

// how much pixel you have to swipe
swipeTolerance: 50,

// lightbox wrapper Class
className: 'simple-lightbox',

// width / height ratios
widthRatio: 0.8,
heightRatio: 0.9,

// scales the image up to the defined ratio size
scaleImageToRatio: false,

// disable right click
disableRightClick: false,

// disable page scroll
// disable<a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: true,

// show an alert if image was not found
alertError:  true,

// alert message
alertErrorMessage: 'Image not found, next image will be loaded',

// additional HTML showing inside every image
additionalHtml: false,

// enable history back closes lightbox instead of reloading the page
history: true,

// time to wait between slides
throttleInterval: 0,

// Pinch to <a href="https://www.jqueryscript.net/zoom/">Zoom</a> feature for touch devices
doubleTapZoom: 2,
maxZoom: 10,

// adds class to html element if lightbox is open
htmlClass: 'has-lightbox',

// RTL mode
rtl: false,

// elements with this class are fixed and get the right padding when lightbox opens
fixedClass: 'sl-fixed',

// fade speed in ms
fadeSpeed: 300,

// whether to uniqualize images
uniqueImages: true,

// focus the lightbox on open to enable tab control
focus: true,
});
  // lightbox end





})
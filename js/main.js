
// ============nav========
var navList = document.getElementById('nav-list');
var isHidden = true;
function toggleDropdownMenu(){
  if (isHidden) {
    // show the list
    navList.style.display = "block";
    isHidden = false;
  }else {
    //hide the list
    navList.style.display = "none";
    isHidden = true;
  }
}
// ========sticky nav=========


window.onscroll = function() {stickynav();};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// ===========Countdown Clock========
function cdtd() {
  var date = new Date('May 10, 2018 00:08:00');
  var now = new Date();
  var timeDiff = date.getTime() - now.getTime();
  if (timeDiff <= 0){
    clearTimeout(timer);
    document.write('Today is the Event!');
  }
  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var weeks = Math.floor(days - 31);
  if (weeks < 0) {
    weeks = 0;
  }
  var months = Math.floor(weeks/ 4);
  var years = Math.floor(weeks/ 12);
  years %= 12;
  weeks %= 7;
  days %= 31;
  hours %= 24;
  minutes %= 60;
  seconds %= 60;
  document.getElementById('yearsBox').innerHTML = years;
  document.getElementById('monthsBox').innerHTML = months;
  document.getElementById('daysBox').innerHTML = days;
  document.getElementById('hoursBox').innerHTML = hours;
  document.getElementById('minutesBox').innerHTML = minutes;
  document.getElementById('secondsBox').innerHTML = seconds;
}
cdtd();
setInterval(cdtd,1000);

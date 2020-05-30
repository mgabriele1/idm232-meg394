/* dropdowns */
let dropDown = document.getElementById('ddcontent');
const clickMe = document.getElementById ('helpclick')

clickMe.addEventListener ("click", function () {
    if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
      } else {
        dropDown.style.display = "none";
      }
  },
  false);

let dropDown2 = document.getElementById('ddcontent2');
const clickMe2 = document.getElementById ('helpclick2')

clickMe2.addEventListener ("click", function () {
    if (dropDown2.style.display === "none") {
        dropDown2.style.display = "block";
      } else {
        dropDown2.style.display = "none";
      }
  },
  false);

/* filter color change on click */
let filter1 = document.getElementById("meat");
let meatHidden = document.getElementById("meat-h");

filter1.addEventListener ("click", function() {
  filter1.classList.toggle("filterclick");
  if (filter1.className == "filterclick") {
    meatHidden.style.display = "block";
  } else {
    meatHidden.style.display = "none";
  }
}, false);

let filter2 = document.getElementById("sea");
let seaHidden = document.getElementById("sea-h");

filter2.addEventListener ("click", function() {
  filter2.classList.toggle("filterclick");
  if (filter2.className == "filterclick") {
    seaHidden.style.display = "block";
  } else {
    seaHidden.style.display = "none";
  }
}, false);

let filter3 = document.getElementById("vege");
let vegeHidden = document.getElementById("vege-h");

filter3.addEventListener ("click", function() {
  filter3.classList.toggle("filterclick");
  if (filter3.className == "filterclick") {
    vegeHidden.style.display = "block";
  } else {
    vegeHidden.style.display = "none";
  }
}, false);


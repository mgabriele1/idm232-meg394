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

let filter1 = document.getElementById('filter1')
filter1.addEventListener("click", function() {
  if (filter1.className != "clicked") {
    filter1.classList.replace('clicked');
  }
  else {
    filter1.classList.replace('unclicked');
  }
},
false);


var slides = document.getElementsByClassName("slide");
for (var i = 0; i < slides.length; i++) {
   Distribute(slides.item(i));
}
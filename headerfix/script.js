/* filter dropdown */
const button = document.getElementById('filterb');
const div = document.getElementById('filterdd');

const handleToggle = () => {
	const isHidden = div.hidden;
  div.hidden = !isHidden;
}

button.addEventListener('click', handleToggle);

/* help dropdown */
const button2 = document.getElementById('helpb');
const div2 = document.getElementById('helpdd');

const handleToggle2 = () => {
	const isHidden = div2.hidden;
	div2.hidden = !isHidden;
}

button2.addEventListener('click', handleToggle2);

let filter1 = document.getElementById("meat");
let meatHidden = document.getElementById("meat-h");
let filter2 = document.getElementById("sea");
let seaHidden = document.getElementById("sea-h");
let filter3 = document.getElementById("vege");
let vegeHidden = document.getElementById("vege-h");

let xout1 = document.getElementById("x1");
let xout2 = document.getElementById("x2");
let xout3 = document.getElementById("x3");

//url get
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const filter = urlParams.get('filter')
if (filter== 'a') {
  filter1.classList.toggle("filterclick");
  meatHidden.style.display = "block";
  xout1.addEventListener ("click", function() {
    window.location.href = "index.php";
    filter1.classList.toggle("filterclick");
  }, false);
  } else {
    meatHidden.style.display = "none";
}
if (filter== 'b') {
  filter2.classList.toggle("filterclick");
  seaHidden.style.display = "block";
  xout2.addEventListener ("click", function() {
    window.location.href = "index.php";
    filter2.classList.toggle("filterclick");
  }, false);
  } else {
    seaHidden.style.display = "none";
}
if (filter== 'c') {
  filter3.classList.toggle("filterclick");
  vegeHidden.style.display = "block";
  xout3.addEventListener ("click", function() {
    window.location.href = "index.php";
    filter3.classList.toggle("filterclick");
  }, false);
  } else {
  vegeHidden.style.display = "none";
}



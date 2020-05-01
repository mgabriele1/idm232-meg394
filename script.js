let dropDown = document.getElementById('ddcontent');
const clickMe = document.getElementById ('helpclick')

dropDown.style.dis

clickMe.addEventListener ("click", function () {
    if (dropDown.style.display === "none") {
        dropDown.style.display = "block";
      } else {
        dropDown.style.display = "none";
      }
  },
  false);



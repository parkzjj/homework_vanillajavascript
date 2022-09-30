const body = document.querySelector("body");
const colors = ["#87ceeb", "#800080", "#ffff00"];

function changeColor() {
  body.classList.remove("originbg");
  if (window.innerWidth <= 600) {
    body.classList.add("originbg");
  } else if (window.innerWidth > 600 && window.innerWidth < 900) {
    body.style.backgroundColor = colors[1];
  } else {
    body.style.backgroundColor = colors[2];
  }
}

window.addEventListener("resize", changeColor);

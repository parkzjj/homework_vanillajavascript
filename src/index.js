const body = document.querySelector("body");
const colors = ["#87ceeb", "#800080", "#ffff00"];


function handleColor() {
  // body.classList.remove("originbg");
  if (window.innerWidth <= 600) {
    // body.classList.remove("originbg");
    body.style.backgroundColor = colors[0];
  } else if (window.innerWidth > 600 && window.innerWidth < 900) {
    // body.classList.remove("originbg");
    body.style.backgroundColor = colors[1];
  } else {
    // body.classList.remove("originbg");
    body.style.backgroundColor = colors[2];
  }
}

// body.style.backgroundColor = colors[0];
window.addEventListener("resize", handleColor);

// 1.처음부터 css로 기본 배경색을 주고 시작하거나
// 2.처음부터 js로 기본 배경색을 주고 시작하거나
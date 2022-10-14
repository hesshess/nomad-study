import "./styles.css";

const body = document.body;

const LARGE = "large";
const MEDIUM = "medium";
const SMALL = "small";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(LARGE);
    body.classList.remove(MEDIUM);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM);
    body.classList.remove(LARGE, SMALL);
  } else {
    body.classList.remove(MEDIUM);
    body.classList.add(SMALL);
  }
}

window.addEventListener("resize", handleResize);

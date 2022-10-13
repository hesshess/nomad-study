import './styles.css';
const colors = ['#1abc9c', '#3498db', '#9b59b6', '#f39c12', '#e74c3c'];

const h2 = document.querySelector('h2');
class SuperEventHandler {
  handleEnter() {
    h2.innerText = 'The mouse is here!';
    h2.style.color = colors[0];
  }
  handleLeave() {
    h2.innerText = 'The mouse is gone!';
    h2.style.color = colors[1];
  }
  handleResize() {
    h2.innerText = 'You just resized!';
    h2.style.color = colors[2];
  }
  handleContext() {
    h2.innerHTML = 'That was a right click!';
    h2.style.color = colors[3];
  }
}
const mouseHandler = new SuperEventHandler();

h2.addEventListener('mouseenter', mouseHandler.handleEnter);
h2.addEventListener('mouseleave', mouseHandler.handleLeave);
window.addEventListener('resize', mouseHandler.handleResize);
window.addEventListener('contextmenu', mouseHandler.handleContext);

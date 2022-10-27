const fillBtn = document.getElementById('fill-btn');
const eraseBtn = document.getElementById('erase-btn');
const strokeBtn = document.getElementById('stroke-btn');
const color = document.getElementById('color');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = 5;

let isStorke = true;
let isFill = false;
let isDrawing = false;

function onMove(event) {
  if (isFill && isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.fill();
    return;
  } else if (isStorke && isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isDrawing = true;
}
function cancelPainting() {
  isDrawing = false;
  ctx.beginPath();
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}
function onFillClick() {
  isFill = true;
  isStorke = false;
  isDrawing = false;
  ctx.beginPath();
}
function onStrokeClick() {
  isFill = false;
  isStorke = true;
  isDrawing = false;
  ctx.beginPath();
}
function onEraseClick() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
color.addEventListener('change', onColorChange);

fillBtn.addEventListener('click', onFillClick);
strokeBtn.addEventListener('click', onStrokeClick);
eraseBtn.addEventListener('click', onEraseClick);

const fillBtn = document.getElementById('fill-btn');
const strokeBtn = document.getElementById('stroke-btn');
const color = document.getElementById('color');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = 10;

let isStroke = true;
let isFill = false;
let isDrawing = false;

function onMove(event) {
  if (isDrawing) {
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
  if (isFill) {
    ctx.fill();
  }
  ctx.beginPath();
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function onFillClick() {
  isFill = true;
  isStroke = false;
  isDrawing = false;
  ctx.beginPath();
}
function onStrokeClick() {
  isFill = false;
  isStroke = true;
  isDrawing = false;
  ctx.beginPath();
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
color.addEventListener('change', onColorChange);

fillBtn.addEventListener('click', onFillClick);
strokeBtn.addEventListener('click', onStrokeClick);

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

let isStorke = true;
let isFill = false;
let isDrawing = false;

function onMove(event) {
  if (isFill && isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    console.log(isStorke, isFill, isDrawing);
    return;
  } else if (isStorke && isDrawing) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    console.log(isStorke, isFill, isDrawing);
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isDrawing = true;
  console.log(isStorke, isFill, isDrawing);
}
function cancelPainting() {
  isDrawing = false;
  if (isFill) {
    ctx.fill();
  }
  ctx.beginPath();
  console.log(isStorke, isFill, isDrawing);
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
  console.log(isStorke, isFill, isDrawing);
}
function onStrokeClick() {
  isFill = false;
  isStorke = true;
  isDrawing = false;
  ctx.beginPath();
  console.log(isStorke, isFill, isDrawing);
}

canvas.addEventListener('mousemove', onMove);
canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', cancelPainting);
canvas.addEventListener('mouseleave', cancelPainting);
color.addEventListener('change', onColorChange);

fillBtn.addEventListener('click', onFillClick);
strokeBtn.addEventListener('click', onStrokeClick);

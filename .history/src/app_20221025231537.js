const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

ctx.fillRect(220, 210, 20, 140);
ctx.fillRect(260, 210, 80, 260);
ctx.fillRect(360, 210, 20, 140);

ctx.beginPath();
ctx.arc(300, 120, 70, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(270, 90, 13, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(330, 90, 13, Math.PI, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.arc(300, 120, 30, 2 * Math.PI, Math.PI);
ctx.fill();

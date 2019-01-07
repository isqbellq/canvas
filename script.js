"use strict" 

const canvas = document.querySelector("#sheet");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = "black"; // "#FFF8E7";
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = "10";
context.globalCompositeOperation = "darken";

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
	if (!isDrawing) return;

	console.log(e);
	context.strokeStyle= `hsl(${hue}, 100%, 50%)`;
	context.beginPath();
	// start from
	context.moveTo(lastX, lastY);
	// go to 
	context.lineTo(e.offsetX, e.offsetY);
	context.stroke();
	[lastX, lastY] = [e.offsetX, e.offsetY];
	hue++;
}

canvas.addEventListener("mousemove", draw);

canvas.addEventListener("mousedown", (e) => {
	isDrawing = true;
	[lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);
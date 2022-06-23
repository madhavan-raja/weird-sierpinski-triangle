const width = 600;
const height = 600;
const edges = 3;
const shapeSize = 250;
const pointsPerFrame = 1000;

let corners = [];
let previousPoint = undefined;

function setup() {
	var canvas = createCanvas(width, height);
	const x = (windowWidth - width) / 2;
	const y = (windowHeight - height) / 2;
	canvas.position(x, y);

	translate(width / 2, height / 2);

	background(46);

	noFill();
	stroke(255);
	strokeWeight(2);

	drawPolygon();

	previousPoint = randomPointInPolygon();

	frameRate(60);
}

function draw() {
	translate(width / 2, height / 2);

	for (let i = 0; i < pointsPerFrame; ++i) {
		point(previousPoint[0], previousPoint[1]);
		let randomCornerIndex = random(edges);
		let newPoint = midPoint(random(corners), previousPoint);
		previousPoint = newPoint;
	}
}

function drawPolygon() {
	const offset = PI / 2;
	let angle = TWO_PI / edges;

	for (let a = -offset; a < TWO_PI - offset; a += angle) {
		let sx = cos(a) * shapeSize;
		let sy = sin(a) * shapeSize;

		point(sx, sy);

		corners.push([sx, sy]);
	}
}

function randomPointInPolygon() {
	let angle = random(TWO_PI);
	let length = shapeSize * sin(PI * ((1 / 2) - (1 / edges)));

	return [sin(angle) * length, cos(angle) * length]
}

function midPoint(p1, p2) {
	return [
		(p1[0] + p2[0]) / 2,
		(p1[1] + p2[1]) / 2
	];
}
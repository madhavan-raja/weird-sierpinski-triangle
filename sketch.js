const edges = 3;
const shapeSize = 400;
const pointsPerFrame = 100;
const maxPoints = 10000;

let corners = [];
let peak = 1;
let points = new Array(maxPoints);

function setup() {
	var canvas = createCanvas(windowWidth - 4, windowHeight - 4);

	points[0] = randomPointInPolygon();

	frameRate(60);
}

function draw() {
	resizeCanvas(windowWidth - 4, windowHeight - 4);
	translate((windowWidth - 4) / 2, (windowHeight - 4) / 2);

	background(46);
	noFill();
	stroke(255);
	strokeWeight(2);

	drawPolygon();

	for (let i = 0; i < pointsPerFrame; ++i) {
		let randomCornerIndex = random(edges);
		let newPoint = midPoint(random(corners), points[(peak - 1) % maxPoints]);
		points[peak++ % maxPoints] = [newPoint[0], newPoint[1]];
	}

	for (let i = 0; i < corners.length; ++i) {
		point(corners[i][0], corners[i][1]);
	}

	for (let i = 0; i < min(peak, points.length); ++i) {
		point(points[i][0], points[i][1]);
	}
}

function drawPolygon() {
	const offset = PI / 2;
	let angle = TWO_PI / edges;

	for (let a = -offset; a < TWO_PI - offset; a += angle) {
		let sx = cos(a) * shapeSize;
		let sy = sin(a) * shapeSize;

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
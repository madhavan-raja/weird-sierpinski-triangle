const width = 600;
const height = 600;
const edges = 3;
const shapeSize = 250;

function setup() {
	var canvas = createCanvas(width, height);
	const x = (windowWidth - width) / 2;
	const y = (windowHeight - height) / 2;
	canvas.position(x, y);

	background(46);

	noFill();
	stroke(255);
	strokeWeight(4);

	polygon(width / 2, height / 2, shapeSize, edges);
}

function draw() {
}

function polygon(x, y, radius, npoints) {
	const offset = PI / 2;
	let angle = TWO_PI / npoints;
	beginShape();
	for (let a = -offset; a < TWO_PI - offset; a += angle) {
		let sx = x + cos(a) * radius;
		let sy = y + sin(a) * radius;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}
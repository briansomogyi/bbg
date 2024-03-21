function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("green");
    // face
    fill("white");
    stroke("black");
    circle(200, 200, 50);
    // eyes
    stroke("orange");
    circle(190, 190, 5);
    stroke("blue");
    circle(190, 190, 1);
    stroke("orange");
    circle(210, 190, 5);
    stroke("blue");
    circle(210, 190, 1);
    // mouth
    stroke("red");
    arc(200, 210, 20, 10, 0, Math.PI);
}
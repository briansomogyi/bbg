function setup() {
    createCanvas(1200, 400);
}

function draw() {
    background("green");
    Edraw(200, 200);
    Bdraw(600, 200);
    Gdraw(1000, 200);
}

function Bdraw(x, y) {
    // face
    fill("white");
    stroke("black");
    circle(x, y, 50);
    // eyes
    stroke("orange");
    circle(x - 10, y - 10, 5);
    stroke("blue");
    circle(x - 10, y - 10, 1);
    stroke("orange");
    circle(x + 10, y - 10, 5);
    stroke("blue");
    circle(x + 10, y - 10, 1);
    // mouth
    stroke("red");
    arc(x, y + 10, 20, 10, 0, Math.PI);
    // cheeks
    fill("pink")
    stroke("pink")
    circle(x - 20, y, 7);
    circle(x + 20, y, 7);
}


function Edraw(x, y) {
    // face
    fill("yellow");
    stroke("black");
    circle(x, y, 200);
    // eyes
    fill("white");
    stroke("black");
    circle(x-50, y-50, 50);
    fill("white");
    stroke("blue");

    circle(x-50, y-50, 10);
    stroke("black");
    circle(x, y-50, 50);
    stroke("blue");
    circle(x, y-50, 10);
    // mouth
    stroke("pink");
    arc(x, y+10, 70, 30, 0, Math.PI);
}

function Gdraw(x, y) {
    // face
    fill("gray");
    stroke("white");
    circle(x, y, 100);
    // eyes
    fill("yellow");
    stroke("black");
    circle(x - 20, y - 20, 20);
    fill("white");
    stroke("blue");
    circle(x - 20, y - 20, 10);
    fill("yellow");
    stroke("black");
    circle(x + 20, y - 20, 20);
    fill("white");
    stroke("blue");
    circle(x + 20, y - 20, 10);
    // mouth
    stroke("pink");
    fill("white");
    arc(x, y + 20, 70, 30, 0, Math.PI);
    // cheeks
    fill("red");
    circle(x + 30, y + 5, 7);
    circle(x - 30, y + 5, 7);
}
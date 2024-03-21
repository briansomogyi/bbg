function setup() {
    createCanvas(1200, 400);
}

function draw() {
    background("green");
    Edraw();
    Bdraw();
    Gdraw();
}

function Bdraw() {
    // face
    fill("white");
    stroke("black");
    circle(600, 200, 50);
    // eyes
    stroke("orange");
    circle(590, 190, 5);
    stroke("blue");
    circle(590, 190, 1);
    stroke("orange");
    circle(610, 190, 5);
    stroke("blue");
    circle(610, 190, 1);
    // mouth
    stroke("red");
    arc(600, 210, 20, 10, 0, Math.PI);
    // cheeks
    fill("pink")
    stroke("pink")
    circle(580, 200, 7);
    circle(620, 200, 7);
}


function Edraw() {
    // face
    fill("yellow");
    stroke("black");
    circle(200, 200, 200);
    // eyes
    fill("white");
    stroke("black");
    circle(150, 150, 50);
    fill("white");
    stroke("blue");
    
    circle(150, 150, 10);
    stroke("black");
    circle(200, 150, 50);
    stroke("blue");
    circle(200, 150, 10);
    // mouth
    stroke("pink");
    arc(200, 210, 70, 30, 0, Math.PI);
}

function Gdraw() {
    // face
    fill("gray");
    stroke("white");
    circle(1000, 200, 100);
    // eyes
    fill("yellow");
    stroke("black");
    circle(990, 190, 50);
    fill("white");
    stroke("blue");    
    circle(990, 190, 10);
    stroke("black");
    circle(1010, 190, 50);
    stroke("blue");
    circle(1010, 190, 10);
    // mouth
    stroke("pink");
    arc(1000, 210, 70, 30, 0, Math.PI);
    // cheeks
    fill("red");
    circle(210, 205, 7);
    circle(190, 205, 7);
}
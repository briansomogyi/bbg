const smGiulia = {
    x: 1000,
    y: 200,
    direction: 1,
    speed:3
}
function checkLimitsmGiulia() {
    if (smGiulia.x >= tableWidth || smGiulia.x <= 0) {
        smGiulia.direction *= -1;
    }
    smGiulia.x += smGiulia.direction*smGiulia.speed;
}

function smileyFaceGiulia(x, y) {
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
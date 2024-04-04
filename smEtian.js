const smEtian = {
    x: 200,
    y: 200,
    direction: 1,
}

checkLimitsEtian();
    smileyFaceEtian(xEtian, yEtian);

function checkLimitsEtian() {
    if (smEtian.x >= tableWidth || smEtian.x <= 0) {
        smEtian.direction *= -1;
    }
    smEtian.x += smEtian.direction;
}

function smileyFaceEtian(x, y) {
    // face
    fill("yellow");
    stroke("black");
    circle(x, y, 200);
    // eyes
    fill("white");
    stroke("black");
    circle(x - 50, y - 50, 50);
    fill("white");
    stroke("blue");

    circle(x - 50, y - 50, 10);
    stroke("black");
    circle(x, y - 50, 50);
    stroke("blue");
    circle(x, y - 50, 10);
    // mouth
    stroke("pink");
    arc(x, y + 10, 70, 30, 0, Math.PI);
}




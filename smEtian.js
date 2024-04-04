let xEtian = 200;
let yEtian = 200;
let xDiretionEtian = 1;

checkLimitsEtian();
    smEtian(xEtian, yEtian);

function checkLimitsEtian() {
    if (xEtian >= tableWidth) {
        xDiretionEtian *= -1;
    }
    xEtian += xDiretionEtian;
}

function smEtian(x, y) {
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




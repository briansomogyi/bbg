const smEtian = {
    ray: 25,
    x: 200,
    y: 200,
    directionX: 1,
    directionY: 1,
    speedX: 7,
    speedY: 7,
}


function checkLimitsEtian() {
    if (smEtian.x >= tableWidth || smEtian.x <= 0) {
        smEtian.directionX *= -1;
    }
    smEtian.x += smEtian.directionX * smEtian.speedX;
    if (smEtian.y >= tableHeight || smEtian.y <= 0) {
        smEtian.directionY *= -1;
    }
    smEtian.y += smEtian.directionY * smEtian.speedY;
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




const smEtian = {
    ray: 100,
    x: 200,
    y: 200,
    directionX: 1,
    directionY: 1,
    speedX: 7,
    speedY: 7,
}

function checkLimitsEtian() {
    // Verificam limitele de la stanga si de la dreapta
    if (smEtian.x >= tableWidth - smEtian.ray || smEtian.x <= smEtian.ray) {
        smEtian.directionX *= -1;
    }
    smEtian.x += smEtian.directionX * smEtian.speedX;

    // Verificam limita de sus
    if (smEtian.y <= smEtian.ray) {
        smEtian.directionY *= -1;
    }

    // Verificam coliziunea cu paleta in aceeasi instructiune
    if (smEtian.y >= paddleEtian.y - smEtian.ray &&
        smEtian.y <= paddleEtian.y + paddleEtian.height &&
        smEtian.x >= paddleEtian.x - smEtian.ray &&
        smEtian.x <= paddleEtian.x + paddleEtian.width + smEtian.ray) {
        smEtian.directionY *= -1;
    }
    smEtian.y += smEtian.directionY * smEtian.speedY;
}

function smileyFaceEtian(x, y, ray) {
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





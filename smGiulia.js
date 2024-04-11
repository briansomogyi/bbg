const smGiulia = {
    ray: 50,
    x: 1000,
    y: 200,
    directionX: 1,
    directionY: 1,
    speedX: 5,
    speedY: 5,
}
function checkLimitsmGiulia() {
    // Verificam limitele de la stanga si de la dreapta
    if (smGiulia.x >= tableWidth - smGiulia.ray || smGiulia.x <= smGiulia.ray) {
        smGiulia.directionX *= -1;
    }
    smGiulia.x += smGiulia.directionX * smGiulia.speedX;

    // Verificam limitele de sus si de jos
    if (smGiulia.y >= tableHeight - smGiulia.ray || smGiulia.y <= smGiulia.ray) {
        smGiulia.directionY *= -1;
    }
    smGiulia.y += smGiulia.directionY * smGiulia.speedY;

    // Verificam coliziunea cu paleta
    if (smGiulia.y >= paddleGiulia.y - smGiulia.ray && smGiulia.x >= paddleGiulia.x + smGiulia.ray && smGiulia.x <= paddleGiulia.x + paddleGiulia.width - smGiulia.ray) {
        smGiulia.directionY *= -1;
    }
    smGiulia.y += smGiulia.directionY * smGiulia.speedY;
}

function smileyFaceGiulia(x, y, ray) {
    // face
    fill("gray");
    stroke("white");
    circle(x, y, ray * 2);
    // eyes
    fill("yellow");
    stroke("black");
    circle(x - ray * 2 / 5, y - ray * 2 / 5, ray * 2 / 5);
    fill("white");
    stroke("blue");
    circle(x - ray * 2 / 5, y - ray * 2 / 5, ray / 5);
    fill("yellow");
    stroke("black");
    circle(x + ray * 2 / 5, y - ray * 2 / 5, ray * 2 / 5);
    fill("white");
    stroke("blue");
    circle(x + ray * 2 / 5, y - ray * 2 / 5, ray / 5);
    // mouth
    stroke("pink");
    fill("white");
    arc(x, y + ray * 2 / 5, ray * 4 / 5, ray * 2 / 5, 0, Math.PI);
    // cheeks
    fill("red");
    circle(x + ray * 4 / 5, y + ray / 10, ray / 5);
    circle(x - ray * 4 / 5, y + ray / 10, ray / 5);
}
const smBrian = {
    x: 600,
    y: 200,
    directionX: 1,
    directionY: 1,
    speedX: 5,
    speedY: 5,
}

function checkLimitsBrian() {
    if (smBrian.x >= tableWidth || smBrian.x <= 0) {
        smBrian.directionX *= -1;
    }
    smBrian.x += smBrian.directionX * smBrian.speedX;
    if (smBrian.y >= tableHeight || smBrian.y <= 0) {
        smBrian.directionY *= -1;
    }
    smBrian.y += smBrian.directionY * smBrian.speedY;
}


function smileyFaceBrian(x, y) {
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



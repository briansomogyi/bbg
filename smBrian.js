const smBrian = {
    ray: 25,
    x: 600,
    y: 200,
    directionX: 1,
    directionY: 1,
    speedX: 5,
    speedY: 5,
}

function checkLimitsBrian() {
    if (smBrian.x >= tableWidth - smBrian.ray || smBrian.x <= smBrian.ray) {
        smBrian.directionX *= -1;
    }
    smBrian.x += smBrian.directionX * smBrian.speedX;

    if (smBrian.y >= tableHeight - smBrian.ray || smBrian.y <= smBrian.ray) {
        smBrian.directionY *= -1;
    }
    smBrian.y += smBrian.directionY * smBrian.speedY;
}


function smileyFaceBrian(x, y, ray) {
    // face
    fill("white");
    stroke("black");
    circle(x, y, ray * 2);
    // eyes
    stroke("orange");
    circle(x - ray * 2 / 5, y - ray * 2 / 5, ray / 5);
    stroke("blue");
    circle(x - ray * 2 / 5, y - ray * 2 / 5, ray / 25);
    stroke("orange");
    circle(x + ray * 2 / 5, y - ray * 2 / 5, ray / 5);
    stroke("blue");
    circle(x + ray * 2 / 5, y - ray * 2 / 5, ray / 25);
    // mouth
    stroke("red");
    arc(x, y + ray * 2 / 5, ray * 4 / 5, ray * 2 / 5, 0, Math.PI);
    // cheeks
    fill("pink")
    stroke("pink")
    circle(x - ray * 4 / 5, y, ray / 5);
    circle(x + ray * 4 / 5, y, ray / 5);
}



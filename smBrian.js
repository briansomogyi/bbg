const smBrian = {
    x: 600,
    y: 200,
    direction: 1,
    speed: 3,
}

function checkLimitsBrian() {
    if (smBrian.x >= tableWidth || smBrian.x <= 0) {
        smBrian.direction *= -1;
    }
    smBrian.x += smBrian.direction * smBrian.speed;
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



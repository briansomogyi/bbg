let xBrian = 600;
let yBrian = 200;
let xDirectionBrian = 1;

function checkLimitsBrian() {
    if (xBrian >= tableWidth) {
        xDirectionBrian *= -1;
    }
    xBrian += xDirectionBrian;
}


function smBrian(x, y) {
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



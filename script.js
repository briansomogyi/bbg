let tableWidth = 1200;
let tableHeight = 400;

function setup() {
    createCanvas(1200, 400);
}

function draw() {
    background("green");
    checkLimitsEtian();
    smEtian(xEtian, yEtian);
    checkLimitsBrian();
    smileyFaceBrian(smBrian.x, smBrian.y);
    checkLimitsmGiulia();
    smGiulia(xGiulia, yGiulia);
}
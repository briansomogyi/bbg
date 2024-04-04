let tableWidth = 1200;
let tableHeight = 400;

function setup() {
    createCanvas(1200, 400);
}

function draw() {
    background("green");
    checkLimitsEtian();
    smileyFaceEtian(smEtian.x, smEtian.y, smEtian.ray);
    checkLimitsBrian();
    smileyFaceBrian(smBrian.x, smBrian.y, smBrian.ray);
    checkLimitsmGiulia();
    smileyFaceGiulia(smGiulia.x, smGiulia.y, smGiulia.ray);
}
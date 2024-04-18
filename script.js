const tableWidth = 1250;
const tableHeight = 650;

function setup() {
    createCanvas(tableWidth, tableHeight);
}

function draw() {
    background("green");
    checkLimitsEtian();
    smileyFaceEtian(smEtian.x, smEtian.y, smEtian.ray);
    checkLimitsBrian();
    smileyFaceBrian(smBrian.x, smBrian.y, smBrian.ray);
    checkLimitsmGiulia();
    smileyFaceGiulia(smGiulia.x, smGiulia.y, smGiulia.ray);
    createPaddleBrian();
    createPaddleGiulia();
    createPaddleEtian();
    initBricksBrian();
    createBricksBrian();
    initBricksEtian();
    createBricksEtian();
}
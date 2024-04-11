const paddleEtian = {
    x: 100,
    y: 500,
    color: "orange",
    width: 120,
    height: 80,
}

function createPaddleEtian() {
    fill(paddleEtian.color);
    rect(paddleEtian.x, paddleEtian.y, paddleEtian.width, paddleEtian.height);
}
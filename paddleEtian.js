const paddleEtian = {
    x: 100,
    y: 590,
    color: "orange",
    width: 120,
    height: 80,
}

function createPaddleEtian() {
    fill(paddleEtian.color); 
    paddleEtian.x = mouseX - paddleEtian.width/2;
    rect(paddleEtian.x, paddleEtian.y, paddleEtian.width, paddleEtian.height);
}
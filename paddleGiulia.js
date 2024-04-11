const paddleGiulia = {
    x: 900,
    y: 550,
    color: "blue",
    width: 80,
    height: 20,
}
function createPaddleGiulia() {
    fill(paddleGiulia.color);
    paddleGiulia.x = mouseX - paddleGiulia.width/2;
    rect(paddleGiulia.x, paddleGiulia.y, paddleGiulia.width, paddleGiulia.height);
}

const paddleBrian = {
    x: 590,
    y: 550,
    color: "red",
    width: 100,
    height: 20,
}

function createPaddleBrian() {
    fill(paddleBrian.color);
    paddleBrian.x = mouseX - paddleBrian.width/2;
    rect(paddleBrian.x, paddleBrian.y, paddleBrian.width, paddleBrian.height);
}
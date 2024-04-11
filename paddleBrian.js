const paddleBrian = {
    x: 500,
    y: 550,
    color: "red",
    width: 70,
    height: 40,
}

function createPaddleBrian() {
    fill(paddleBrian.color);
    rect(mouseX, paddleBrian.y, paddleBrian.width, paddleBrian.height);
}
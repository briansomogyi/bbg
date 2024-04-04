const paddleBrian = {
    x: 100,
    y: 200,
    color: "red",
    width: 50,
    height: 50,
}

function createPaddleBrian() {
    fill(paddleBrian.color);
    rect(paddleBrian.x, paddleBrian.y, paddleBrian.width, paddleBrian.height);
}
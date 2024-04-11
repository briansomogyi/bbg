const bricks = []

const bricksRows = 1
const bricksCols = 1
const rowBricksNumber = 4

function initBricksBrian() {
    for (let index = 0; index < bricksRows * rowBricksNumber; index++) {
        bricks.push({
            hit: false,
            x: index * 70,
            y: 15,
            color: "blue",
            width: 50,
            height: 20,
        })

    }
}

function createBricksBrian() {
    bricks.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height);
    });
}
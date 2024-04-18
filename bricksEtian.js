const bricksEtian = []

const bricksRowsEtian = 1
const bricksColsEtian = 1
const rowBricksNumberEtian = 4

function initBricksEtian() {
    for (let index = 0; index < bricksRowsEtian * rowBricksNumberEtian; index++) {
        bricksEtian.push({
            hit: false,
            x: index * 70,
            y: 15,
            color: "blue",
            width: 50,
            height: 20,
        })

    }
}

function createBricksEtian() {
    bricksEtian.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height);
    });
}
const bricksEtian = []


const marginEtian = 10;
const distanceBetweenBricksEtian = 10;

const bricksRowsEtian = 3;
const rowBricksNumberEtian = 7;

const brickWidthEtian = Math.floor(
    (Math.floor(tableWidth / 3) -
        2 * marginEtian -
        (rowBricksNumberEtian - 1) * distanceBetweenBricksEtian) /
    rowBricksNumberEtian
);

function initBricksEtian() {

    let x = marginEtian;

    for (let index = 0; index < bricksRowsEtian * rowBricksNumberEtian; index++) {
        const row = Math.floor(index / rowBricksNumberEtian) + 1;

        x += brickWidthEtian + distanceBetweenBricksEtian;
        if (index % rowBricksNumberEtian == 0) {
            x = marginEtian;
        }

        bricksEtian.push({
            hit: false,
            x,
            y: row * 25,
            color: "white",
            width: brickWidthEtian,
            height: 20,
            row,
        })

    }
}

function createBricksEtian() {
    bricksEtian.forEach(brick => {
        fill(brick.color);
        rect(brick.x, brick.y, brick.width, brick.height);
    });
}
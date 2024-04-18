const bricksBrian = []

const marginBrian = 10;
const distanceBetweenBricksBrian = 10;

const bricksRowsBrian = 3;
const rowBricksNumberBrian = 7;

const brickWidthBrian = Math.floor(
    (Math.floor(tableWidth / 3) -
        2 * marginBrian -
        (rowBricksNumberBrian - 1) * distanceBetweenBricksBrian) /
    rowBricksNumberBrian
);

function initBricksBrian() {
    let x = Math.floor(tableWidth / 3) + marginBrian;
    for (let index = 0; index < bricksRowsBrian * rowBricksNumberBrian; index++) {
        const row = Math.floor(index / rowBricksNumberBrian) + 1;

        x += brickWidthBrian + distanceBetweenBricksBrian;
        if (index % rowBricksNumberBrian == 0) {
            x = Math.floor(tableWidth / 3) + marginBrian;
        }

        bricksBrian.push({
            hit: false,
            x,
            y: row * 25,
            color: "blue",
            width: brickWidthBrian,
            height: 20,
            row,
        })

    }
}

function createBricksBrian() {
    bricksBrian.forEach(brick => {
        if (!brick.hit) {
            fill(brick.color);
            rect(brick.x, brick.y, brick.width, brick.height);
        }
    });
}

function checkCollisionBricksBrian() {
    bricksBrian.forEach(brick => {
        if (!brick.hit &&
            smBrian.y >= brick.y - smBrian.ray &&
            smBrian.y <= brick.y + brick.height &&
            smBrian.x >= brick.x - smBrian.ray &&
            smBrian.x <= brick.x + brick.width + smBrian.ray) {
            brick.hit = false;
        }
    });
}
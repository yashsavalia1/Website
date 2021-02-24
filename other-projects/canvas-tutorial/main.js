var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 50;

var ctx = canvas.getContext("2d");

function draw() {
    ctx.canvas.width = window.innerWidth - 40;
    ctx.canvas.height = window.innerHeight - 40;
}

const radius = 30;

let turn = 1;

var mouse = {
    x: undefined,
    y: undefined
}

class Circle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isFilled = false;
        this.isRed = false;
        this.isYellow = false;

        this.draw = function(color) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, toRadians(360), false);
            ctx.closePath();
            switch (color) {
                case 0:
                    ctx.fillStyle = "white";
                    break;

                case 1:
                    ctx.fillStyle = "red";
                    this.isFilled = true;
                    this.isRed = true;
                    break;

                case 2:
                    ctx.fillStyle = "yellow";
                    this.isFilled = true;
                    this.isYellow = true;
                    break;
            }

            ctx.fill();
        };


        this.update = function(value) {
            draw(value);
        }

    }
}



ctx.fillStyle = "dodgerblue"
ctx.fillRect(200, 50, 750, 500);

var twoDCircleArray = [];

for (var i = 0; i < 7; i++) {
    var circleArray = [];
    for (var j = 0; j < 6; j++) {
        var circle = new Circle(270 + (i * 100), 500 - (j * 80));
        circleArray.push(circle);
        circle.draw(0);
    }
    twoDCircleArray.push(circleArray);
}

console.log(twoDCircleArray);

window.addEventListener("click", onClick);

function onClick(event) {
    mouse.x = event.x;
    mouse.y = event.y;

    console.log(mouse);

    for (var i in twoDCircleArray) {
        if (mouse.x - 30 < twoDCircleArray[i][0].x &&
            mouse.x + 30 > twoDCircleArray[i][0].x) {
            for (var j in twoDCircleArray[i]) {
                if (twoDCircleArray[i][j].isFilled) {
                    continue;
                } else {
                    twoDCircleArray[i][j].draw(turn)
                    changeTurn();
                    break;
                }
            }

        }
    }

}








//-------------------------------------------

function changeTurn() {
    if (turn == 1) {
        turn = 2;
        return;
    }

    if (turn == 2) {
        turn = 1;
        return;
    }
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function heightToPixels(prop) {
    return prop * canvas.height;
}

function widthToPixels(prop) {
    return prop * canvas.width;
}
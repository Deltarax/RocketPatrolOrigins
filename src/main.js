// const { Phaser } = require("../lib/phaser");

console.log("Hello from main.js");

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play]
};

let game = new Phaser.Game({
    scene: [Menu, Play]
});

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
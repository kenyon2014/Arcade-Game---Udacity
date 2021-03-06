//Create Enemy class
var Enemy = function (x, y) {
 
    this.x = x;
    this.xPos = x;

    this.y = y;
    this.yPos = y;

    this.sprite = "images/enemy-bug.png";
};

//Create Player class
var Player = function (x, y) {

    this.x = x;
    this.y = y;

    this.sprite = "images/char-boy.png";
};

//Set enemy speed, reset parameters, and collision functionality
Enemy.prototype.update = function (dt) {
    for (var i = 0; i < allEnemies.length; i++) {

        allEnemies[3].speed = 100;
        allEnemies[2].speed = 100;
        allEnemies[1].speed = 100;
        allEnemies[0].speed = 100;

        allEnemies[6].speed = 200;
        allEnemies[5].speed = 200;
        allEnemies[4].speed = 200;

        allEnemies[9].speed = 150;
        allEnemies[8].speed = 150;
        allEnemies[7].speed = 150;
    }
    this.x += (this.speed * dt);

    if (this.x >= 600) {
        this.reset();
    }
};

//Reset enemy position when it reaches right border
Enemy.prototype.reset = function () {
    this.x = this.xPos;
    this.y = this.yPos;
};

//Draw enemy
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Set player to reset when it reaches the water
Player.prototype.update = function (dt) {
    if (this.y < -10 || this.x === allEnemies.x || this.y === allEnemies.y) {
        this.reset();
    }
};

//Draw player
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Set player reset position
Player.prototype.reset = function () {
    this.x = 200;
    this.y = 300;
};

//Instantiation of objects
var boy = new Player(200, 300);

var bug10 = new Enemy(-400, 235);
var bug9 = new Enemy(-200, 235);
var bug8 = new Enemy(-100, 235);

var bug7 = new Enemy(-315, 150);
var bug6 = new Enemy(-500, 150);
var bug5 = new Enemy(-150, 150);

var bug4 = new Enemy(-275, 55);
var bug3 = new Enemy(-340, 55);
var bug2 = new Enemy(-600, 55);
var bug1 = new Enemy(-500, 55);

var allEnemies = [bug10, bug9, bug8, bug7, bug6, bug5, bug4, bug3, bug2, bug1];
var player = boy;

//Setting movement of keyboard arrow keys 
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.handleInput = function (arrow) {
    if (this.y > -20 && arrow == "up") {
        this.y = this.y - 25;
    }
    if (this.y < 400 && arrow === "down") {
        this.y = this.y + 25;
    }
    if (this.x < 400 && arrow === "right") {
        this.x = this.x + 15;
    }
    if (this.x > 0 && arrow === "left") {
        this.x = this.x - 15;
    }
};

for (var i = 0; i < 3; i++) {
    var score = 0;
    if (player.y < -10) {
        score += 100;
        $("#score").replace("0", score);
    }
}
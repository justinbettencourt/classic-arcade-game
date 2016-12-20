/* 
CUSTOM ACTIONS TO ADD:
1) Collect Gems and bring to special tiles
    - Place Gems on board
    - Collide into Gems, show them being carried with player
    - When player drops off gem, place gem on special tile
2) Win Screen
3) Title Screen
*/

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed) * dt;

    // When bugs go off screen, move them back to start position
    if (this.x > 600) {
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
    //Set the variables for player to have a start position, speeds and sprite.
    this.x = x;
    this.y = y;
    this.speed = 100;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    // This is a for loop to allow the collision detection to work with all the enemies in the game. It searches through the array.
    for (i=0; i < allEnemies.length; i++) {
        if (player.x < allEnemies[i].x + 60 && player.x + 60 > allEnemies[i].x && player.y < allEnemies[i].y + 60 && 60 + player.y > allEnemies[i].y) {
            player = new Player(200, 380);
        }
    }

    // If the player reaches the water, restart the player by creating a new player.
    if (this.y == -35) {
        player = new Player(200, 380);
    }
};

Player.prototype.render = function(left, top, right, bottom) {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
};

Player.prototype.handleInput = function(input){
    if (input == 'left' && this.x !== 0) {
        // console.log("Moving Left");
        this.x -= 100;
    }

    if (input == 'right' && this.x !== 400) {
        // console.log("Moving Right")
        this.x += 100;
    }

    if (input == 'up' && this.y !== -35) {
        // console.log("Moving Up");
        this.y -= 83;
    }

    if (input == 'down' && this.y !== 380) {
        // console.log("Moving Down");
        this.y += 83;
    }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(-100, 50, 500);
var enemy2 = new Enemy(-100, 130, 200);
var enemy3 = new Enemy(-350, 130, 200);
var enemy4 = new Enemy(-100, 210, 400);
var enemy5 = new Enemy(-400, 210, 400);
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

var player = new Player(200, 380);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

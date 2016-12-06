// This creates the canvas ID so we can draw things.
var c = document.querySelector("#c");

// This allows the canvas to get the content to be displayed.
var ctx = c.getContext("2d");

ctx.font = "36pt Impact";
ctx.textAllign = "center";

ctx.fillStyle = "white";
ctx.fillText("CANVAS", c.width / 2, 40);
ctx.fillText("MEMES!", c.width / 2, 80);

ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.strokeText("CANVAS MEMES!", c.width / 2, 40);

// ctx.strokeStyle = "black";

// ctx.strokeRect(50, 50, 100, 100);

// ctx.beginPath();
// ctx.moveTo(75, 75);
// ctx.lineTo(125, 125);
// ctx.lineTo(125, 75);

// ctx.fillStyle = "white";
// ctx.fill();

// ctx.font = "bold 36px sans-serif";
// ctx.strokeText("CANVAS", 50, 50);
// ctx.strokeText("MEMES", 50, 100);

// ctx.fillRect(100, 100, 100, 100);

// ctx.strokeRect(50, 50, 50, 50);

// ctx.beginPath();
// ctx.moveTo (10, 10);
// ctx.lineTo (50, 50);
// ctx.lineTo (50, 10);
// ctx.lineTo (10, 10);

// ctx.fill();
// ctx.stroke();

// // Create a new variable called image and set it as a new Image file.
// var image = new Image();

// // Load the image.
// image.onload = function () {
//     console.log("Load Image");
//     // Draws the image sing ctx
//     ctx.drawImage(image, 0, 0, c.width, c.height);

//     // Were going to save created image.
//     var savedImage = c.toDataURL();
//     window.open(savedImage);
// }

// // Set what the image will display.
// image.src = "images/catroomguardian.jpg";

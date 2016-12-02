var c = document.querySelector("#c");
var ctx = c.getContext("2d");

var image = new Image();

image.onload = function () {
    console.log("Load Image");
    ctx.drawImage(image, 0, 0, c.width, c.height);

    var savedImage = c.toDataURL();
}

image.src = "images/catroomguardian.jpg";

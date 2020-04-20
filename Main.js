var myCanvas = document.getElementById('canvas');
var ctx = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

var panjangPP = 100;
var tinggiPP = 75;

// tutup gelas 1 //
ctx.translate(myCanvas.width/8, myCanvas.height/8);
ctx.fillStyle = 'red';
ctx.fillRect(205, 92, 150,20);
// tutu gelas 2 //
ctx.translate(myCanvas.width/20, myCanvas.height/20);
ctx.fillStyle = 'red';
ctx.fillRect(405, 55, 150,20);
// tutup gelas 3 //
ctx.translate(myCanvas.width/200, myCanvas.height/200);
ctx.fillStyle = 'red';
ctx.fillRect(796, -65, 20,150);

// Gelas //
// 1
ctx.translate(myCanvas.width/4, myCanvas.height/4);
ctx.fillStyle = 'grey';
ctx.fillRect(-207, -40, 150,250);

// 2
ctx.translate(myCanvas.width/4, myCanvas.height/4);
ctx.fillStyle = 'grey';
ctx.fillRect(-277, -165, 150,250);

// 3
ctx.translate(myCanvas.width/4, myCanvas.height/4);
ctx.fillStyle = 'grey';
ctx.fillRect(-347, -290, 150,250);


$(window).on("load", function () {
    
    // Get canvas
    canvas = document.getElementById("canvas");
    $canvas = $(canvas);
    
    // Add event listener
    window.addEventListener("resize", resizeCanvas, false);
    
    // Draw elements
    drawCanvas();
});

drawCanvas = function(){
    resizeCanvas();
    
    var c = canvas.getContext("2d");
    
    c.save();
    
        var cImg = new CanvasImage(c, 200, 200, 50, "./img/teil1.jpg");
        cImg.draw(function(){

        c.strokeStyle = "#00FF00";
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(200, 200);
        c.lineTo(400,400);
        c.stroke();
        c.beginPath();
        c.moveTo(200, 200);
        c.lineTo(200,220);
        c.stroke();
        c.beginPath();
        c.moveTo(200, 200);
        c.lineTo(220,200);
        c.stroke();
        });
    
    c.restore();
}

resizeCanvas = function(){
    var fullWidth = $canvas.parent().innerWidth();
    var height = 500;
    
    canvas.width = fullWidth;
    canvas.height = height;
}
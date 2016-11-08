$(window).on("load", function () {
    
    // Get canvas
    canvas = document.getElementById("canvas");
    $canvas = $(canvas);
    
    // Add event listener
    window.addEventListener("resize", resizeCanvas, false);
    
    // Draw elements
    drawCanvas();
    
    // add event listener
    $(window).on("resize", scaleCanvas);
    $(window).on("resize", drawCanvas);
});

drawCanvas = function(){
    resizeCanvas();
    
    var c = canvas.getContext("2d");
    scaleCanvas();
    c.save();
        
        var circleRadius = 50,
            cImages = [
            new CanvasImage(c, 294, 50, circleRadius, "./img/drehbank.jpg"),
            new CanvasImage(c, 538, 174, circleRadius, "./img/cnc.jpg"),
            new CanvasImage(c, 439, 450, circleRadius, "./img/team.jpg"),
            new CanvasImage(c, 149, 450, circleRadius, "./img/werkzeuge.jpg"),
            new CanvasImage(c, 51, 174, circleRadius, "./img/teil1.jpg"),
            new CanvasImage(c, 294, 250, circleRadius, "./img/building.jpg")
        ];
    
        for(var i = 0; i < cImages.length; i++){
            var curImg = cImages[i];
            
            c.lineWidth = 2;
            c.beginPath();
            c.moveTo(curImg.x, curImg.y);
            c.lineTo(294,250);
            c.closePath();
            c.stroke();
                
            curImg.draw();
        }
    
    c.restore();
}

resizeCanvas = function(){
    // canvas.width = 588; // $canvas.parent().innerWidth()
    // canvas.height = 500;
}

scaleCanvas = function(){
    
    var width = 588;
    var height = 500;
    
    var parentWidth = $canvas.parent().width();
    var parentHeight = $canvas.parent().height();
    
    var aspectRatio = parentWidth / width;
    
    if (aspectRatio >= 1){
        canvas.width = width;
        canvas.height = height;
        return;
    }
    
    canvas.width = width * aspectRatio;
    canvas.height = height * aspectRatio;
    
    var c = canvas.getContext("2d");
    c.scale(aspectRatio, aspectRatio);
}
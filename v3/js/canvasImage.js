window.CanvasImage = function (context, x, y, radius, imgSrc) {
    'use strict';
    
    this.c = context;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.imgSrc = imgSrc;
    
    this.getCircle = function () {
        var circle = new Circle(this.c, this.x, this.y, this.radius, "red");
        return circle;
    };
    
    this.getImage = function (successHandler, errorHandler) {
        var img = new Image();
        img.onload = successHandler;
        img.onerror = errorHandler;
        img.src = this.imgSrc;
    };
    
    this.draw = function (completionHandler) {
        
        // Get save instance of 'this'
        var self = this;
        
        // asynchronos call
        this.getImage(function () {
            
            // save context
            self.c.save();
            
            // in this context, 'this' is the image
            var img = this;
            
            // Get properties
            var width = img.width;
            var height = img.height;
            var aspectRatio = width / height;
            
            var newWidth,
                newHeight;
            
            if (width > height){
                newHeight = 2 * self.radius;
                newWidth = newHeight * aspectRatio;
            } else {
                newWidth = 2 * self.radius;
                newHeight = newWidth / aspectRatio;
            }
            
            self.getCircle().draw();
            self.c.clip();
            
            var pos = self.getImgPosFromCenter(self.x, self.y, newWidth, newHeight);
            
            self.c.drawImage(img, pos.x, pos.y, newWidth, newHeight);
            self.c.stroke();
            
            // restore contest
            self.c.restore();
            
            // call completionHandler
            if (completionHandler && typeof completionHandler === "function"){
                completionHandler();
            }
        });
    
    };
    
    
    this.getImgPosFromCenter = function (centerX, centerY, width, height) {
        "use strict";
        
        var pos = {};
        
        pos.x = centerX - 0.5 * width;
        pos.y = centerY - 0.5 * height;
        
        return pos;
    };
};
function FadeIn(data) {
    this.configData = data || this.defaultConfig;

    this.changeSlideAuto = function (data) {
        data.element.className += " fadeIn";
        
        setTimeout(function () {
            data.element.classList.remove("fadeIn");
            data.imgNum = data.imgNum + 1;

            if (data.imgNum > data.imgLength) {
                data.imgNum = 0;
            } else if (this.imgNum < 0) {
                data.imgNum = data.imgLength;
            }
            
            data.element.src = data.images[data.imgNum];
        }, 1000)
        
        return false;
    };

    this.nextImage = function (data) {
        var configObj = this.configData;

        this.configData.imgNum = this.configData.imgNum + 1;

        this.cheackImg(this.configData);

        this.configData.element.className += " fadeIn";

        setTimeout(function () {
            configObj.element.classList.remove("fadeIn");

            configObj.element.src = configObj.images[configObj.imgNum]; 
        }, this.configData.swipeSpeed)     
    }

    this.prevImage = function (data) {
        var configObj = this.configData;

        this.configData.imgNum = this.configData.imgNum - 1;

        this.cheackImg(this.configData);

        this.configData.element.className += " fadeIn";

        setTimeout(function () {
            configObj.element.classList.remove("fadeIn");

            configObj.element.src = configObj.images[configObj.imgNum]; 
        }, this.configData.swipeSpeed) 
    };

    return this;
}

FadeIn.prototype = new BaseSlider();
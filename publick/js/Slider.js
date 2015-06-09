"use strict";

function Slider(data) {
    this.configData = data || this.defaultConfig;

    this.changeSlideAuto = function (data) {
        data.element.classList.remove("slide");
        setTimeout(function () {
            data.imgNum = data.imgNum + 1;

            if (data.imgNum > data.imgLength) {
                data.imgNum = 0;
            } else if (this.imgNum < 0) {
                data.imgNum = data.imgLength;
            }
            
            data.element.src = data.images[data.imgNum];
            data.element.className += " slide"
        }, 1000)
        
        return false;
    };

    this.nextImage = function (data) {
        var configObj = this.configData;

        this.configData.imgNum = this.configData.imgNum + 1;
        this.cheackImg(this.configData);

        this.configData.element.classList.remove("slide");

        setTimeout(function () {
            configObj.element.src = configObj.images[configObj.imgNum];
            configObj.element.className += " slide"
        }, 1000)    
    }

    this.prevImage = function (data) {
        var configObj = this.configData;

        this.configData.imgNum = this.configData.imgNum - 1;
        this.cheackImg(this.configData);

        this.configData.element.classList.remove("slide");

        setTimeout(function () {
            configObj.element.src = configObj.images[configObj.imgNum];
            configObj.element.className += " slide"
        }, 1000)  
    };

    return this;
}

Slider.prototype = new BaseSlider();
// "use strict";

function BaseSlider(data) {
     this.defaultConfig = {
            images: [
                '../publick/img/1.png',
                '../publick/img/2.png',
                '../publick/img/3.png',
                '../publick/img/4.png'
            ],
            mode: 'auto',
            swipeSpeed: 500,
            swipeDelay: 1000
        };

    this.configData = data || this.defaultConfig;
    this.imgLength = this.configData.images.length - 1;
    this.imgNum = 0;

    // var //element,
    //     configData,
    //     data,
    //     defaultConfig = {
    //         images: [
    //             '../publick/img/1.png',
    //             '../publick/img/2.png',
    //             '../publick/img/3.png',
    //             '../publick/img/4.png'
    //         ],
    //         mode: 'auto',
    //         swipeSpeed: 500,
    //         swipeDelay: 1000
    //     };

    this.init = function (el, btn_left, btn_right) {
        this.initData = {
            'imgLength': this.configData.images.length - 1,
            'imgNum': 0,
            'element': el,
            'btn_left': btn_left,
            'btn_right': btn_right
        }

        this.configData = extend( this.configData, this.initData ) || this.defaultConfig;

        this.start();
    };

    this.start = function () {
        if (this.configData.mode === 'auto') {
            this.autoMode();
        } else if (this.configData.mode === 'manual') {
            this.manualMode();
        } else if (this.configData.mode === 'automanual') {
            this.automanualMode();
        } else {
            console.log('error');
        }
    }

    this.setImg = function () {
        this.configData.element.src = this.configData.images[0];
    };

    this.autoMode = function () {
        var swipeDelay = this.configData.swipeDelay || 1000;

        this.setImg();                            

        setInterval(this.changeSlideAuto, swipeDelay, this.configData);
    };

    this.changeSlideAuto = function (data) {
        data.imgNum = data.imgNum + 1;

        if (data.imgNum > data.imgLength) {
            data.imgNum = 0;
        } else if (data.imgNum < 0) {
            data.imgNum = data.imgLength;
        }

        data.element.src = data.images[data.imgNum];
        
        return false;
    }

    // this.manualMode = function (data) {
    //     this.setImg(data);                             // ??????????
        
    //     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    //        this.detectswipe(data.element, this.change, data);
    //     } else {
    //         var left = data.btn_left,
    //             right = data.btn_right;
    //             console.log(left)
    //         document.getElementById('slideshow4').onclick = function () {
    //             console.log('dg')
    //         }
    //     }
        
    // };

    // this.change= function (el, direction, data) {
    //     console.log('el')
    //     console.log(direction)
    //     console.log(data)
    // }

    // this.automanualMode = function (data) {
    //     var swipeDelay = configData.swipeDelay || 1000;

    //     this.setImg(data);                             // ??????????
    // };   

    // this.nextImage = function (data) {
    //     console.log('dddd')
    //     //data.element.src = configData.images[this.imgNum];      
    // };

    // this.prevImage = function () {
    //     console.log('prev')
    //     // data.element.src = configData.images[this.imgNum];
    // };

    return this;
}

function Slider(data) {
     this.configData = data;


    this.changeSlideAuto = function (data) {
        data.element.classList.remove("slide");
        setTimeout(function () {
            data.element.classList.remove("slide");
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

 

    return this;
}

Slider.prototype = new BaseSlider();

function FadeIn(data) {
    this.configData = data;

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

    return this;
}

FadeIn.prototype = new BaseSlider();

window.onload = function() {
        var el = document.getElementById('slideshow1'),
            config = {
                images: [
                    '../publick/img/1.png',
                    '../publick/img/2.png',
                    '../publick/img/3.png',
                    '../publick/img/4.png'
                ],
                mode: 'auto',
                swipeSpeed: 500,
                swipeDelay: 1500
            },
            configAuto = {
                images: [
                    '../publick/img/1.png',
                    '../publick/img/2.png',
                    '../publick/img/3.png',
                    '../publick/img/4.png'
                ],
                mode: 'auto',
                swipeSpeed: 500,
                swipeDelay: 2000
            },
            configManual = {
                images: [
                    '../publick/img/1.png',
                    '../publick/img/2.png',
                    '../publick/img/3.png',
                    '../publick/img/4.png'
                ],
                mode: 'manual',
                swipeSpeed: 500,
                swipeDelay: 2000
            },
            configAutomanual = {
                images: [
                    '../publick/img/1.png',
                    '../publick/img/2.png',
                    '../publick/img/3.png',
                    '../publick/img/4.png'
                ],
                mode: 'automanual',
                swipeSpeed: 500,
                swipeDelay: 2000
            };

    var slider = {
        baseSlider: new BaseSlider(config),
        slider: new Slider(configAuto),
        fadein: new FadeIn(configAuto)
    };
    
    // auto
    slider.baseSlider.init(document.getElementById('slideshow1'), document.getElementById('left1'),document.getElementById('right1'));
    slider.slider.init(document.getElementById('slideshow2'), document.getElementById('left2'),document.getElementById('right2'));
    slider.fadein.init(document.getElementById('slideshow3'), document.getElementById('left3'),document.getElementById('right4'));

    // // manual
    // slider.baseSlider.init(configManual, document.getElementById('slideshow4'), document.getElementById('left4'),document.getElementById('right4'));
    // slider.slider.init(configManual, document.getElementById('slideshow5'),document.getElementById('left5'),document.getElementById('right5'));
    // slider.fadein.init(configManual, document.getElementById('slideshow6'),document.getElementById('left6'),document.getElementById('right6'));

    // // automanual
    // slider.baseSlider.init(configManual, document.getElementById('slideshow7'));
    // slider.slider.init(configManual, document.getElementById('slideshow8'));
    // slider.fadein.init(configManual, document.getElementById('slideshow9'));
   
    //slider_type.fadein.init(configManual);
    // slider_type.baseSlider.render();

    return this    
}

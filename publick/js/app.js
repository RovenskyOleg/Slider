// "use strict";

function BaseSlider(data) {
    this.configData = data;
    var //element,
        configData,
        data,
        defaultConfig = {
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

    this.init = function (config, el, btn_left, btn_right) {
        data = {
            'imgLength': config.images.length - 1,
            'imgNum': 0,
            'element': el,
            'btn_left': btn_left,
            'btn_right': btn_right
        }

        configData = extend( config, data ) || defaultConfig;

        if (configData.mode === 'auto') {
            this.autoMode(configData);
        } else if (configData.mode === 'manual') {
            this.manualMode(configData);
        } else if (configData.mode === 'automanual') {
            this.automanualMode(configData);
        } else {
            console.log('error');
        }
    };

    this.setImg = function (data) {
        data.element.src = data.images[0];
    };

    this.autoMode = function (data) {
        var swipeDelay = data.swipeDelay || 1000;

        this.setImg(data);                            // ??????????

        setInterval(this.changeSlideAuto, swipeDelay, data);
    };

    this.detectswipe = function (el, func, data) {
        swipe_det = new Object();
        swipe_det.sX = 0;
        swipe_det.sY = 0;
        swipe_det.eX = 0;
        swipe_det.eY = 0;

        var min_x = 20;  
        var max_x = 40;  
        var min_y = 40;  
        var max_y = 50; 
        var direc = "";

        console.log(this.change)

        el.addEventListener('touchstart',function(e){
            var t = e.touches[0];
            swipe_det.sX = t.screenX; 
            swipe_det.sY = t.screenY;
        },false);

        el.addEventListener('touchmove',function(e){
            e.preventDefault();
            var t = e.touches[0];
            swipe_det.eX = t.screenX; 
            swipe_det.eY = t.screenY;    
        },false);

        el.addEventListener('touchend',function(e){
            if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
                if(swipe_det.eX > swipe_det.sX) direc = "right";
                else direc = "left";
            }

            if (direc != "") {
                if(typeof func == 'function') {
                    func(el, direc, data);
                }
            }
            
            direc = "";
        },false);  
    }

    // this.swipeEvent = function (el, swipe, data) {
    //     if (swipe === 'left') {
    //        //data.element.src = configData.images[this.imgNum]; 

    //     } else if (swipe === 'right') {
    //         console.log('right')
    //     }
    // }

    this.manualMode = function (data) {
        this.setImg(data);                             // ??????????
        
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
           this.detectswipe(data.element, this.change, data);
        } else {
            var left = data.btn_left,
                right = data.btn_right;
                console.log(left)
            document.getElementById('slideshow4').onclick = function () {
                console.log('dg')
            }
        }
        
    };

    this.change= function (el, direction, data) {
        console.log('el')
        console.log(direction)
        console.log(data)
    }

    this.automanualMode = function (data) {
        var swipeDelay = configData.swipeDelay || 1000;

        this.setImg(data);                             // ??????????
    };   

    this.nextImage = function (data) {
        console.log('dddd')
        //data.element.src = configData.images[this.imgNum];      
    };

    this.prevImage = function () {
        console.log('prev')
        // data.element.src = configData.images[this.imgNum];
    };

    this.changeSlideAuto = function (data) {
        data.imgNum = data.imgNum + 1;

        if (data.imgNum > data.imgLength) {
            data.imgNum = 0;
        } else if (this.imgNum < 0) {
            data.imgNum = data.imgLength;
        }

        data.element.src = data.images[data.imgNum];
        
        return false;
    }

    return this;
}

function Slider(data) {
    this.configData = data;
    //console.log(data)
    this.setImg = function () {

        console.log(this.configData)
        //data.element.src = data.images[0];
    };

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

    this.change= function (el, direction, data) {
        console.log(el)
        console.log(direction)
        console.log(data)
    }

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
        slider: new Slider(configManual),
        fadein: new FadeIn(configManual)
    };

    console.log(slider.baseSlider)
    console.log(slider.slider)
    
    slider.slider.setImg()
    // auto
    // slider.baseSlider.init(config, document.getElementById('slideshow1'), document.getElementById('left1'),document.getElementById('right1'));
    // slider.slider.init(configAuto, document.getElementById('slideshow2'), document.getElementById('left2'),document.getElementById('right2'));
    // slider.fadein.init(configAuto, document.getElementById('slideshow3'), document.getElementById('left3'),document.getElementById('right4'));

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

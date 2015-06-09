"use strict";

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

    this.init = function (el, btn_left, btn_right) {
        this.initData = {
            'imgLength': this.configData.images.length - 1,
            'imgNum': 0,
            'start': true,
            'element': el,
            'btn_left': btn_left,
            'btn_right': btn_right
        }

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            btn_left.classList.add('hide');
            btn_right.classList.add('hide');            
        } else {
            btn_right.classList.remove('hide');
            btn_left.classList.remove('hide');
        }

        this.configData = extend( this.configData, this.initData );

        this.setImg();

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

    this.manualMode = function () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.detectswipe(this.configData.element);
        } else {
            this.configData.btn_left.onclick = this.prevImage.bind(this);
            this.configData.btn_right.onclick = this.nextImage.bind(this); 
        }  
    };

    this.nextImage = function () {
        this.configData.imgNum = this.configData.imgNum + 1;

        this.cheackImg(this.configData);

        this.configData.element.src = this.configData.images[this.configData.imgNum];      
    }

    this.prevImage = function () {
        this.configData.imgNum = this.configData.imgNum - 1;

        this.cheackImg(this.configData);

        this.configData.element.src = this.configData.images[this.configData.imgNum];
    };

    this.cheackImg = function (data) {
        if (data.imgNum > data.imgLength) {
            data.imgNum = 0;
        } else if (data.imgNum < 0) {
            data.imgNum = data.imgLength;
        }

        return data.imgNum
    }

    this.detectswipe = function (el) {
        var self = this,
            min_x = 20,  
            max_x = 40, 
            min_y = 40,  
            max_y = 50, 
            direc = "",
            swipe_det = {
                'sX': 0,
                'sY': 0,
                'eX': 0,
                'eY': 0
            }

        el.addEventListener('touchstart',function(e){
            var t = e.touches[0];

            swipe_det.sX = t.screenX; 
            swipe_det.sY = t.screenY;
        },false);

        el.addEventListener('touchmove',function(e){
            var t;

            e.preventDefault();
            t = e.touches[0];
            swipe_det.eX = t.screenX; 
            swipe_det.eY = t.screenY;    
        },false);

        el.addEventListener('touchend', function(e){
            if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
                if(swipe_det.eX > swipe_det.sX) direc = "right";
                else direc = "left";
            }

            self.changeSwipeSlide(direc);
        },false);    
    }

    this.changeSwipeSlide = function (direc) {
        if (direc != "") {
            if (direc === 'left') {
                this.prevImage();
            } else if (direc === 'right') {
                this.nextImage();
            }
        }

        direc = "";
    }

    this.slider;

    this.automanualMode = function () {
        var swipeDelay = this.configData.swipeDelay || 1000;

        this.slider = setInterval(this.changeSlideAuto, swipeDelay, this.configData); 

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.detectswipe(this.configData.element);
            
            this.changeSwipeSlide = function (direc) {
                if (direc != "") {
                    if (direc === 'left') {
                        this.changeSlidePrev();
                    } else if (direc === 'right') {
                        this.changeSlideNext();
                    }
                }

                direc = "";
            }
        } else {
            this.configData.btn_left.onclick = this.changeSlidePrev.bind(this); 
            this.configData.btn_right.onclick = this.changeSlideNext.bind(this); 
        }
    }; 

    this.runSlider = function () {
        var swipeDelay = this.configData.swipeDelay || 1000;
        this.slider = setInterval(this.changeSlideAuto, swipeDelay, this.configData); 
    }

    this.changeSlideNext = function () {
        clearInterval(this.slider);
        this.nextImage();
        this.runSlider();
    }
    this.changeSlidePrev = function () {
        clearInterval(this.slider);
        this.prevImage();
        this.runSlider();
    }   

    return this;
}
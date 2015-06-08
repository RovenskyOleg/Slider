function BaseSlider() {
    var imgNum = 0,
        imgLength = 0,
        element,
        configData,
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

    this.init = function (config, el) {
        element = el;

        configData = extend( config, {'element': element} ) || defaultConfig;

        imgLength = configData.images.length - 1;

        this.render(configData);

        if (this.mode[configData.mode]) {
            this.mode[configData.mode](configData)
        } else {
            console.log('error');
        }
    }

    this.mode = {
        auto: function () {
            var swipeDelay = configData.swipeDelay || 1000;
           
            setInterval(function() {
                changeSlide(1);

            }, swipeDelay);

        },
        manual: function () {
            var swipeDelay = configData.swipeDelay || 1000;

            setInterval(function() {
                changeSlideManual(1);
            }, swipeDelay);
        },
        automanual: function () {
            var swipeDelay = configData.swipeDelay || 1000;

            console.log('modeAutomanual');
        }
    }

    function changeSlide (val) {
        imgNum = imgNum + val;
        if (imgNum > imgLength) {
            imgNum = 0;
        }
        
        if (imgNum < 0) {
            imgNum = imgLength;
        }

        element.src = configData.images[imgNum];
        
        return false;
    }

    function changeSlideManual (val) {
         imgNum = imgNum + val;
        if (imgNum > imgLength) {
            imgNum = 0;
        }
        
        if (imgNum < 0) {
            imgNum = imgLength;
        }

        element.src = configData.images[imgNum];
        
        return false;
    }

    this.render = function (val) {
        val.element.src = val.images[0];
    }

    return this;
}
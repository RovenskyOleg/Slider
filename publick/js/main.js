"use strict";

window.onload = function() {
    var facade = new Facade();
    var self = this;
    var cachedData;
    var uri = 'publick/data/config_data.json';

    facade.getResult("GET", uri, mockCallback);

    function mockCallback(data) {
        cachedData = JSON.parse(data);
        self.init();
    };

    this.init = function () {
        var slider = {
                baseSlider: new BaseSlider(cachedData.config),
                slider: new Slider(cachedData.configAuto),
                fadein: new FadeIn(cachedData.configAuto)
            },
            slider_manual = {
                baseSlider: new BaseSlider(cachedData.configManual),
                slider: new Slider(cachedData.configManual),
                fadein: new FadeIn(cachedData.configManual)
            },
            slider_automanual = {
                baseSlider: new BaseSlider(cachedData.configAutomanual),
                slider: new Slider(cachedData.configAutomanual),
                fadein: new FadeIn(cachedData.configAutomanual)
            };
        
        // auto

        slider.baseSlider.init(document.getElementById('slideshow1'), document.getElementById('left1'),document.getElementById('right1'));
        slider.slider.init(document.getElementById('slideshow2'), document.getElementById('left2'),document.getElementById('right2'));
        slider.fadein.init(document.getElementById('slideshow3'), document.getElementById('left3'),document.getElementById('right3'));

        // manual
        
        slider_manual.baseSlider.init(document.getElementById('slideshow4'), document.getElementById('left4'),document.getElementById('right4'));
        slider_manual.slider.init(document.getElementById('slideshow5'),document.getElementById('left5'),document.getElementById('right5'));
        slider_manual.fadein.init(document.getElementById('slideshow6'),document.getElementById('left6'),document.getElementById('right6'));

        // automanual

        slider_automanual.baseSlider.init(document.getElementById('slideshow7'), document.getElementById('left7'),document.getElementById('right7'));
        slider_automanual.slider.init(document.getElementById('slideshow8'), document.getElementById('left8'),document.getElementById('right8'));
        slider_automanual.fadein.init(document.getElementById('slideshow9'), document.getElementById('left9'),document.getElementById('right9'));

    }

    return this    
}

"use strict";

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

    // auto
    var slider = {
        baseSlider: new BaseSlider(config),
        slider: new Slider(configAuto),
        fadein: new FadeIn(configAuto)
    };
    
    slider.baseSlider.init(document.getElementById('slideshow1'), document.getElementById('left1'),document.getElementById('right1'));
    slider.slider.init(document.getElementById('slideshow2'), document.getElementById('left2'),document.getElementById('right2'));
    slider.fadein.init(document.getElementById('slideshow3'), document.getElementById('left3'),document.getElementById('right3'));

    // manual
    var slider_manual = {
        baseSlider: new BaseSlider(configManual),
        slider: new Slider(configManual),
        fadein: new FadeIn(configManual)
    };

    slider_manual.baseSlider.init(document.getElementById('slideshow4'), document.getElementById('left4'),document.getElementById('right4'));
    slider_manual.slider.init(document.getElementById('slideshow5'),document.getElementById('left5'),document.getElementById('right5'));
    slider_manual.fadein.init(document.getElementById('slideshow6'),document.getElementById('left6'),document.getElementById('right6'));

    // automanual
    var slider_automanual = {
        baseSlider: new BaseSlider(configAutomanual),
        slider: new Slider(configAutomanual),
        fadein: new FadeIn(configAutomanual)
    };
    
    slider_automanual.baseSlider.init(document.getElementById('slideshow7'), document.getElementById('left7'),document.getElementById('right7'));
    slider_automanual.slider.init(document.getElementById('slideshow8'), document.getElementById('left8'),document.getElementById('right8'));
    slider_automanual.fadein.init(document.getElementById('slideshow9'), document.getElementById('left9'),document.getElementById('right9'));

    return this    
}

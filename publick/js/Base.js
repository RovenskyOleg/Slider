function BaseSlider() {
     this.init = function (config, dom_el_1, dom_el_2) {
        element = dom_el_1;

        configData = extend( config, {'element': element} ) || defaultConfig;

        imgLength = configData.images.length - 1;

        this.setImg(configData);

        if (this.mode[configData.mode]) {
            this.mode[configData.mode](configData)
        } else {
            console.log('error');
        }
    }

}

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
            swipeDelay: 3000
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
                swipeDelay: 1000
            };

    var slider = {
        baseSlider: new BaseSlider(),
        scroll_slider: new Slider(),
        fadein: new FadeIn()
    };

    slider.baseSlider.init(config, document.getElementById('slideshow1'));
    slider.scroll_slider.init(configManual, document.getElementById('slideshow2'));

    return this    
}
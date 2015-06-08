function Slider() {
    this.render = function (val) {
        val.element.src = val.images[0];
    }

    return this;
}

Slider.prototype = new BaseSlider();
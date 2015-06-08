function FadeIn() {
    this.render = function () {
        element.src = configData.images[0];
    }

    return this;
}

FadeIn.prototype = new BaseSlider();
const brand = document.querySelector(".navbar-brand");

const colorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            brand.style.textShadow = color;
            resolve();
        }, delay)
    })
};

async function change() {
    await colorChange('0 0 5px hsla(46, 75%, 65%, 0.85)', 2000);
    await colorChange('none', 2000);
    change();
}

change();
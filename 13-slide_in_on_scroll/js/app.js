function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.log(e);
    // console.log(window.scrollY);

    sliderImages.forEach(sliderImg => {
        // halfway through the image
        const slideInAt = (window.scrollY + window.innerHeight) + sliderImg.height / 2;
        // console.log(slideInAt);
        
        // botton of the image
        const imgBotton = sliderImg.offsetTop + sliderImg.height;
        console.log({imgBotton});
        
        const isHalfShown = slideInAt > sliderImg.offsetTop;
        console.log({isHalfShown});
        
        const isNotScrolledPast = window.scrollY < imgBotton;
        console.log([isNotScrolledPast]);
        
        if (isHalfShown && isNotScrolledPast) sliderImg.classList.add('active');
        else sliderImg.classList.remove('active');
    });
}

window.addEventListener('scroll', debounce(checkSlide));
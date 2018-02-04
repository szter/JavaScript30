const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    // to prevent the ripple effect that logs all the divs (not just the one clicked on)
    e.stopPropagation(); // stop bubbling!
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false
}));

/* Useful in store checkouts */
button.addEventListener('click', () => {
    console.log('Clicked once!');
}, {
    once: true // it will listen for a click and unbind itself so future click don't trigger any action
});

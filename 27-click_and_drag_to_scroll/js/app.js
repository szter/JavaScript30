const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // console.log(e.pageX); // to know where the cursor is
    startX = e.pageX - slider.offsetLeft; // to handle any offset
    scrollLeft = slider.scrollLeft; // to know where the initial scroll was when we started it
});

// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });

['mouseleave', 'mouseup'].forEach((e) => {
    slider.addEventListener(e, () => {
        isDown = false;
        slider.classList.remove('active');
    });
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return; // stop the function from running
    // console.count(isDown);
    // console.log({startX});
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft; // to recalculate the mouse position
    console.log({x, startX});
    const walk = x - startX; // tells us how far we have deviated from that initial click
    // const walk = (x - startX) * 3; // multiplying it makes it scroll faster
    console.log({walk});
    slider.scrollLeft = screenLeft - walk;
});
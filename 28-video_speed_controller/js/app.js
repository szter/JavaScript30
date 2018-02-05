const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove() {
    const y = e.pageY - this.offsetTop; // to handle any offset
    // console.log(y);
    const percent = y / this.offsetHeight;
    // console.log(percent);
    const min = 0.5;
    const max = 5;
    const height = Math.round(percent * 100) + '%';
    // console.log(height);
    const playbackRate = percent * (max - min) + min;

    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // console.log(playbackRate);
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);

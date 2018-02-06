const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    // console.log(holes.length); // 0 - 5
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    // console.log(hole);
    if(hole === lastHole) {
        // console.log('Ah nah, that\'s the same one bud');
        return randomHole(holes); // rerun the function if the hole was the same
    }
    lastHole = hole; // to save the last hole and prevent repetition
    return hole;
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    // console.log({time, hole});
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 10000); // 10 seconds
}

function bonk(e) {
    // console.log(e);
    if(!e.isTrusted) return; // cheater! 'isTrusted: true' means no fake click
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));

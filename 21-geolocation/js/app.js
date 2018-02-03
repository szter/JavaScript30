const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(data => {
    // console.log(data);

    // display KM/H
    speed.textContent = data.coords.speed;

    // rotate compass
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, err => {
    console.err(err);
    alert('Hey! You gotta allow that to happen!');
});

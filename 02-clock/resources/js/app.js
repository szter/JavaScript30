(function setClock() {
    // get the elements
    const secondHand = document.querySelector('.sec-hand');
    const minutesHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const allHands = document.querySelectorAll('.hand');

    // get Date
    const now = new Date();
    const seconds = now.getSeconds();
    const mins = now.getMinutes();
    const hours = now.getHours();

    // convert to degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minsDegrees = ((mins / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;
    
    // rotate hands
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minsDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    // remove transition when hands reach 90 deg and re-apply it afterwards
    if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')
    } else {
        allHands.forEach(hand => hand.style.transition = '')
    }

    setInterval(setClock, 1000);
})();



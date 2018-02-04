const triggers = document.querySelectorAll('.cool > li'); // all li elements inside ul.cool
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
    // console.log('Enter!');
    this.classList.add('trigger-enter');
    // setTimeout(() => {
    //     if(this.classList.contains('trigger-enter')) {
    //         this.classList.add('trigger-enter-active')
    //     }
    // }, 150);

    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150); // the add will never run if contains is false

    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    //console.log(dropdown);
    const dropdownCoords = dropdown.getBoundingClientRect();
    console.log({dropdownCoords});
    const navCoords = nav.getBoundingClientRect();
    console.log({navCoords});

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    // console.log('Leave!');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

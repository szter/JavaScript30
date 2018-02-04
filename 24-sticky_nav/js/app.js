const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixNav() {
    // console.log(topOfNav, window.scrollY);
    if (window.scrollY >= topOfNav) {
        console.log(nav.offsetHeight); 
        // the nav is fixed so the body will jump up and take the space the nav is no longer taking
        // nav.offsetHeight: to add padding equal to the nav offsetHeight to prevent the body from jumping up
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);

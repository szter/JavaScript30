const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // '' to avoid undefined showing when there is no dataset
    // console.log(suffix);
    // console.log(this.name);
    // console.log(this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

['change', 'mousemove'].forEach(e => {
    inputs.forEach(input => input.addEventListener(e, handleUpdate));
});
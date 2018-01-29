const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; // on page load
// it will check localStorage first, if there isn't anything then it will load the empty array

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false
    };
    console.log(item);

    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates
        .map((plate, i) => {
            return `
                <li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
                    <label for="item${i}">${plate.text}</label>
                </li>
            `;
        })
        .join(''); // map returns and array and we need a string
}

// event delegation
function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    // console.log(e.target);
    const el = e.target;
    //console.log(el.dataset.index); // data-index=${i}
    const index = el.dataset.index;
    items[index].done = !items[index].done; // changes the property
    localStorage.setItem('items', JSON.stringify(items)); // stores it on local storage
    populateList(items, itemsList); // visually updates the list
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone); // event delegation
populateList(items, itemsList);

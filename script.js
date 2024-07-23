const form = document.querySelector('#item-form');
const itemLists = document.querySelector('.items');
const deleteAll = document.querySelector('#clear');

// add item
function onSubmit(e) {
  e.preventDefault();
  const inputValue = document.querySelector('.form-input').value;
  const li = document.createElement('li');
  const btn = document.createElement('button');
  const i = document.createElement('i');

  if (inputValue === '') {
    alert('Please add an item');
    return;
  }

  i.className = 'fa-solid fa-xmark';
  btn.appendChild(i);
  btn.className = 'remove-item btn-link text-red';
  li.appendChild(document.createTextNode(inputValue));
  li.appendChild(btn);
  itemLists.appendChild(li);
  document.querySelector('.form-input').value = '';
}
form.addEventListener('submit', onSubmit);

// delete simple item
for (const item of itemLists.children) {
  item.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('remove-item')) {
      e.target.parentElement.parentElement.remove();
    }
  });
}
deleteAll.addEventListener('click', clearList);

function clearList() {
  itemLists.innerHTML = '';
}

function filterItems(searchText) {
  const items = Array.from(itemLists.children);

  items.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    if (itemText.includes(searchText.toLowerCase())) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

const filter = document.getElementById('filter');
filter.addEventListener('input', (e) => filterItems(e.target.value));

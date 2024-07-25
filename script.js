const form = document.querySelector('#item-form');
const itemLists = document.querySelector('.items');
const deleteAll = document.querySelector('#clear');
const inputValue = document.querySelector('.form-input').value;
const filter = document.getElementById('filter');
// Load items from localStorage
const store = JSON.parse(localStorage.getItem('store')) || [];

function onSubmit(e) {
  e.preventDefault();
  const inputValue = document.querySelector('.form-input').value;

  if (inputValue === '') {
    alert('Please add an item');
    return;
  }

  const li = document.createElement('li');
  const btn = document.createElement('button');
  const i = document.createElement('i');

  store.push(inputValue);
  localStorage.setItem('item', inputValue);
  localStorage.setItem('store', JSON.stringify(store));

  console.log(localStorage.getItem('store'));

  i.className = 'fa-solid fa-xmark';
  btn.appendChild(i);
  btn.className = 'remove-item btn-link text-red';
  li.appendChild(document.createTextNode(inputValue));
  li.appendChild(btn);
  itemLists.appendChild(li);
  document.querySelector('.form-input').value = '';
}

console.log(store);
function deleteSingleElement(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}
// delete simple item

function clearList() {
  itemLists.innerHTML = '';
  localStorage.clear();
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
form.addEventListener('submit', onSubmit);
filter.addEventListener('input', (e) => filterItems(e.target.value));
itemLists.addEventListener('click', deleteSingleElement);
deleteAll.addEventListener('click', clearList);

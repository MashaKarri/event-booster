const heroSearchForm = document.querySelector('.hero-search');
const searchInput = document.querySelector('.search-input input');
const countrySelect = document.querySelector('.search-select select');

//функція, яка буде отримувати дані з API (зараз просто console.log())
function fetchEventCards(searchText, countryCode) {
  console.log('пошук подій за критеріями:');
  console.log('текст:', searchText);
  console.log('країна:', countryCode);

  //виклик API і відображення карток у main
  // fetch(``)
  //   .then()
  //   .catch();
}

heroSearchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchText = searchInput.value.trim();
  const countryCode = countrySelect.value;

  if (!searchText && !countryCode) {
    alert('будь ласка, введіть пошук або оберіть країну');
    return;
  }

  fetchEventCards(searchText, countryCode);

  heroSearchForm.reset();
});

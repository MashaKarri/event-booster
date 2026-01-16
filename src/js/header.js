import { setSearch, getEvents } from './main-section-api';
import { drawEvents, clearEvents } from './main-section-layout';

const heroSearchForm = document.querySelector('.hero-search');
const searchInput = document.querySelector('.search-input input');
const countrySelect = document.querySelector('.search-select select');

function fetchEventCards(searchText, countryCode) {
  setSearch(searchText, countryCode);
  clearEvents();

  getEvents()
    .then(events => {
      if (!events.length) {
        alert('Нічого не знайдено');
        return;
      }
      drawEvents(events);
    })
    .catch(error => {
      console.log('Помилка при отриманні events:', error);
    });
}

heroSearchForm.addEventListener('submit', async e => {
  e.preventDefault();

  const searchText = searchInput.value.trim();
  const countryCode = countrySelect.value;

  if (!searchText && !countryCode) {
    alert('будь ласка, введіть пошук або оберіть країну');
    return;
  }

  fetchEventCards(searchText, countryCode);
});

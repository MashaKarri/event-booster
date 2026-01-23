import { setSearch, getEvents } from './main-section-api';
import { drawEvents, clearEvents } from './main-section-layout';
import noResultsImg from '../img/main-section/no-results.svg';

const heroSearchForm = document.querySelector('.hero-search');
const searchInput = document.querySelector('.search-input input');
const countrySelect = document.querySelector('.search-select select');
const eventsList = document.querySelector('.events-list');

function fetchEventCards(searchText = '', countryCode = '') {
  setSearch(searchText, countryCode);
  clearEvents();

  window.currentFilters = {
    searchText,
    countryCode,
  };

  window.dispatchEvent(new Event('filtersChanged'));

  getEvents()
    .then(events => {
      if (!events.length) {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.classList.add('no-results');
        noResultsDiv.innerHTML = `
          <img src="${noResultsImg}" alt="No results found" />
          <p>Нічого не знайдено</p>
        `;
        eventsList.appendChild(noResultsDiv);
        return;
      }
      drawEvents(events);
    })
    .catch(error => {
      console.log('Помилка при отриманні events:', error);
    });
}

fetchEventCards();

heroSearchForm.addEventListener('submit', e => {
  e.preventDefault();

  const searchText = searchInput.value.trim();
  const countryCode = countrySelect.value;

  if (!searchText && !countryCode) return;

  fetchEventCards(searchText, countryCode);
});

countrySelect.addEventListener('change', () => {
  const searchText = searchInput.value.trim();
  const countryCode = countrySelect.value;

  if (!searchText && !countryCode) return;

  fetchEventCards(searchText, countryCode);
});

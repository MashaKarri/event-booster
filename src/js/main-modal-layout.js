import { getBestImage } from './main-section-layout';
import spritePath from '../img/symbol-defs.svg';

const modal = document.querySelector('#eventModal');
const modalBody = document.querySelector('#modalBody');
const closeBtn = document.querySelector('.modal-close');

export function openModal() {
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}

export function closeModal() {
  modal.classList.add('is-hidden');
  document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

function createPriceItem(type, min, max, currency = 'UAH', url = '#') {
  return `
    <div class="modal-price-item">
      <div class="price-with-icon">
        <svg class="price-icon" width="29" height="20">
          <use href="${spritePath}#barcode"></use>
        </svg>
        <p>${type} ${min}-${max} ${currency}</p>
      </div>
      <button class="buy-btn" onclick="window.open('${url}', '_blank')">BUY TICKETS</button>
    </div>
  `;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function renderModal(event) {
  const venue = event._embedded?.venues?.[0];
  const attraction = event._embedded?.attractions?.[0];

  const imageUrl = getBestImage(event.images);
  const info = event.info || event.pleaseNote || 'No available description';

  const date = event.dates?.start?.localDate || 'Unknown date';
  let time = event.dates?.start?.localTime || '';
  if (time) {
    const [hour, minute] = time.split(':');
    time = `${hour}:${minute} (Kyiv/Ukraine)`;
  }

  const country = venue?.country?.name || '';
  const city = venue?.city?.name || '';
  const venueName = venue?.name || 'Unknown place';
  const who = attraction?.name || event.name;
  const authorUrl = event.url || '#';

  const prices = event.priceRanges || [];

  const pricesMarkup = prices.length
    ? prices
        .map(price =>
          createPriceItem(
            price.type,
            price.min,
            price.max,
            price.currency,
            authorUrl
          )
        )
        .join('')
    : [
        createPriceItem(
          'Standart',
          getRandomInt(200, 400),
          getRandomInt(450, 700),
          'UAH',
          authorUrl
        ),
        createPriceItem(
          'VIP',
          getRandomInt(900, 1100),
          getRandomInt(1200, 1700),
          'UAH',
          authorUrl
        ),
      ].join('');

  modalBody.innerHTML = `
    <div class="modal-inner">
      <div class="modal-avatar">
        <img src="${imageUrl}" alt="${event.name}">
      </div>

      <div class="modal-event-full">
        <div class="modal-left">
          <img src="${imageUrl}" alt="${event.name}">
        </div>

        <div class="modal-right">
          <h3 class="criterion">INFO</h3>
          <p>${info}</p>

          <h3 class="criterion">WHEN</h3>
          <p>${date}<br>${time}</p>

          <h3 class="criterion">WHERE</h3>
          <p>${city}, ${country}<br>${venueName}</p>

          <h3 class="criterion">WHO</h3>
          <p>${who}</p>

          <h3 class="criterion">PRICES</h3>
          ${pricesMarkup}
        </div>

        <button class="more-btn" onclick="window.open('${authorUrl}', '_blank')">
          MORE FROM THIS AUTHOR
        </button>
      </div>
    </div>
  `;
}

export function renderLoader() {
  modalBody.innerHTML = '<p>Loading...</p>';
}

export function renderError() {
  modalBody.innerHTML = '<p>Error loading event</p>';
}

import spritePath from '../img/symbol-defs.svg';

const eventsList = document.querySelector('.events-list');

export function clearEvents() {
  eventsList.innerHTML = '';
}

function getBestImage(images = []) {
  if (!images.length) return '';

  const sorted = images.sort((a, b) => b.width - a.width);

  return sorted[0].url;
}

export function drawEvents(data = []) {
  const markup = data
    .map(event => {
      const venue = event._embedded?.venues?.[0];

      const venueName = venue?.name || 'Unknown venue';
      const city = venue?.city?.name || '';
      const country = venue?.country?.name || '';
      const fullPlace = [venueName, city, country].filter(Boolean).join(', ');

      const imageUrl = getBestImage(event.images);

      return `
      <li class="list-item">
        <img src="${imageUrl}" alt="${event.name}" loading="lazy">
        <h3>${event.name}</h3>
        <p>${event.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="${spritePath}#location"></use>
          </svg>
          ${fullPlace}
        </p>
      </li>`;
    })
    .join('');

  eventsList.insertAdjacentHTML('beforeend', markup);
}

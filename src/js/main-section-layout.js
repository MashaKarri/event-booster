const eventsList = document.querySelector('.events-list');

export function clearEvents() {
  eventsList.innerHTML = '';
}

export function drawEvents(data = []) {
  const markup = data
    .map(event => {
      const venue = event._embedded?.venues?.[0];

      const venueName = venue?.name || 'Unknown venue';
      const city = venue?.city?.name || '';
      const country = venue?.country?.name || '';
      const fullPlace = [venueName, city, country].filter(Boolean).join(', ');

      return `
      <li class="list-item">
        <img src="${event.images[0].url}" alt="${event.name}">
        <h3>${event.name}</h3>
        <p>${event.dates.start.localDate}</p>
        <p>
          <svg class="icon-location">
            <use href="../img/symbol-defs.svg#location"></use>
          </svg>
          ${fullPlace}
          </p>
      </li>`;
    })
    .join('');

  eventsList.insertAdjacentHTML('beforeend', markup);
}

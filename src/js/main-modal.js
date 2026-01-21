import { getEventById } from './main-modal-api';
import {
  openModal,
  renderModal,
  renderLoader,
  renderError,
} from './main-modal-layout';

const eventsList = document.querySelector('.events-list');

eventsList.addEventListener('click', async e => {
  const card = e.target.closest('.list-item');
  if (!card) return;

  const eventId = card.dataset.id;
  if (!eventId) return;

  renderLoader();
  openModal();

  const eventData = await getEventById(eventId);

  if (!eventData) {
    renderError();
    return;
  }

  renderModal(eventData);
});

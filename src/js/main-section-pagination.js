import { clearEvents, drawEvents } from '../js/main-section-layout';

const API_KEY = 'sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ';
const PER_PAGE = 20;

const paginationEl = document.getElementById('pagination');

let currentPage = 1;
let totalPages = 1;

if (!paginationEl) {
  console.error('pagination container not found');
} else {
  init();
}

async function init() {
  await loadPage(1);
  paginationEl.addEventListener('click', onClick);
}

async function loadPage(page) {
  clearEvents();

  const today = new Date().toISOString();

  const params = new URLSearchParams({
    apikey: API_KEY,
    page: page - 1,
    size: PER_PAGE,
    sort_by: 'eventdate',
    order: 'asc',
    eventdate_from: today,
  });

  const response = await fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?${params}`
  );

  const data = await response.json();

  const events = data._embedded?.events || [];
  totalPages = data.page?.totalPages || 1;
  currentPage = page;

  drawEvents(events);
  renderPagination();
}

function renderPagination() {
  let markup = '';

  const visiblePages = 5;
  let start = Math.max(1, currentPage - 2);
  let end = Math.min(totalPages, start + visiblePages - 1);

  if (start > 1) {
    markup += pageBtn(1);
    if (start > 2) markup += dots();
  }

  for (let i = start; i <= end; i++) {
    markup += pageBtn(i, i === currentPage);
  }

  if (end < totalPages) {
    if (end < totalPages - 1) markup += dots();
    markup += pageBtn(totalPages);
  }

  paginationEl.innerHTML = markup;
}

function pageBtn(page, active = false) {
  return `
    <li class="pagination-item ${active ? 'active' : ''}" data-page="${page}">
      ${page}
    </li>
  `;
}

function dots() {
  return `<li class="pagination-dots">…</li>`;
}

async function onClick(e) {
  const btn = e.target.closest('.pagination-item');
  if (!btn || btn.classList.contains('active')) return;

  const page = Number(btn.dataset.page);
  if (!page) return;

  await loadPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

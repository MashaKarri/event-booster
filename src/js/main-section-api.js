const API_KEY = 'sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ';
const PER_PAGE = 20;

let page = 1;
let searchText = '';
let countryCode = '';

export function setSearch(query, country) {
  searchText = query;
  countryCode = country;
  page = 1;
}

export function incrementPage() {
  page += 1;
}

export async function getEvents() {
  try {
    const today = new Date().toISOString();

    const params = new URLSearchParams({
      apikey: API_KEY,
      page: page - 1,
      size: PER_PAGE,
      sort_by: 'eventdate',
      order: 'asc',
      eventdate_from: today,
    });

    if (searchText) params.append('keyword', searchText);
    if (countryCode) params.append('countryCode', countryCode);

    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?${params}`
    );

    const data = await response.json();
    return data._embedded?.events || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

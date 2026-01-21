const API_KEY = 'sDWkN6pm2AwhXYN4z6b2LV2Cv7281iLQ';

export async function getEventById(eventId) {
  try {
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events/${eventId}.json?apikey=${API_KEY}`
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Помилка завантаження event:', error);
    return null;
  }
}

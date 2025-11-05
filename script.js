const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

// Carrega os eventos salvos no navegador
let events = JSON.parse(localStorage.getItem('events')) || [];

function saveEvents() {
  localStorage.setItem('events', JSON.stringify(events));
}

function displayEvents() {
  eventList.innerHTML = '';

  // Ordena os eventos por data e hora
  events.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));

  if (events.length === 0) {
    eventList.innerHTML = '<p>Nenhum evento adicionado ainda.</p>';
    return;
  }

  events.forEach((event, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${event.name}</strong><br>
      📅 ${event.date} ⏰ ${event.time}<br>
      📝 ${event.description}
      <br><button onclick="deleteEvent(${index})">Excluir</button>
    `;
    eventList.appendChild(li);
  });
}

eventForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newEvent = {
    name: document.getElementById('eventName').value,
    date: document.getElementById('eventDate').value,
    time: document.getElementById('eventTime').value,
    description: document.getElementById('eventDescription').value
  };

  events.push(newEvent);
  saveEvents();
  displayEvents();

  eventForm.reset();
});

function deleteEvent(index) {
  events.splice(index, 1);
  saveEvents();
  displayEvents();
}

// Exibe os eventos ao carregar a página
displayEvents();

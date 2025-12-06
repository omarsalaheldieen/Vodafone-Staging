let queueList = [];

const BASE_URL = "https://arena-backend-staging.gamersloungeme.app/";

const events = [
  "MKA:Enter",
  "TJ:Enter",
  "TC3:Enter",
  "SF:Enter",
  "SI:Enter",
  "PM:Enter",
  "CTR:Enter",
  "MSX:Enter",
  "TT:Enter",
  "T8:Enter",
  "FC:Enter",
  "CTRF:Enter",
];

events.forEach((evt) => {
  socket.on(evt, (data) => {
    let parsedData = JSON.parse(data);
    console.log(parsedData);

    let newQueueNumber = parsedData.queueNumber;
    let gameLogo = parsedData.gameLogo;

    queueList.unshift({
      queueNumber: newQueueNumber,
      gameLogo: gameLogo,
    });

    if (queueList.length > 15) {
      queueList.pop();
    }

    renderQueue();
  });
});

function renderQueue() {
  const container = document.getElementById("queueContainer");
  container.innerHTML = "";

  queueList.forEach((person) => {
    const div = document.createElement("div");
    div.className = "queue-item";

    div.innerHTML = `
            <img src="${BASE_URL}${person.gameLogo}" alt="team" class="team-logo" />
            <div class="ticket">${person.queueNumber}</div>
        `;

    container.appendChild(div);
  });
}

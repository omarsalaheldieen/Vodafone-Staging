let queueList = [];

socket.on("2X:Enter", (data) => {
    let parsedData = JSON.parse(data);
    let newQueueNumber = parsedData.queueNumber;

    queueList.unshift(newQueueNumber);

    if (queueList.length > 15) {
        queueList.pop();
    }

    renderQueue();
});

function renderQueue() {
    const container = document.getElementById("queueContainer");
    container.innerHTML = "";

    queueList.forEach(number => {
        const div = document.createElement("div");
        div.className = "queue-item";
        div.innerHTML = `
            <div class="ticket">
                ${number}
            </div>
        `;
        container.appendChild(div);
    });
}

// const events = [
//   "G2:Call", "LOL:Call", "FC:Call", "CS:Call",
//   "PG:Call", "TIA:Call", "TS:Call", "SARA:Call",
//   "SARAA:Call", "Q1:Call", "STT:Call", "ss:Call",
//   "2XKO:Call", "STM:Call"
// ];

// events.forEach(evt => {
//     socket.on(evt, (data) => {
//         const parsed = safeParse(data);
//         console.log(evt, parsed);
//         addToQueue(parsed);
//     });
// });
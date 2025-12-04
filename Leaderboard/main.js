

```js
const TOTAL_SLOTS = 15;
const scoreboard = document.getElementById("scoreboard");

function createDefaultScoreboard() {
    scoreboard.replaceChildren();
    for (let i = 0; i < TOTAL_SLOTS; i++) {
        const div = document.createElement("div");
        div.className = "team";
        div.innerHTML = `
      <div class="team-name">TDB</div>
      <div class="team-score">000000</div>
    `;
        scoreboard.appendChild(div);
    }
}

createDefaultScoreboard();

socket.on("connection:Vodafone Booth", (data) => {
    let scores = JSON.parse(data);
    console.log("Initial scores:", scores);

    scores.sort((a, b) => b.score - a.score);

    scoreboard.replaceChildren();
    for (let i = 0; i < TOTAL_SLOTS; i++) {
        let userName = scores[i]?.username || "TBD";
        let userScore = scores[i]?.score !== undefined ? scores[i].score.toString() : "000000";

        if (userName.length > 15) {
            userName = userName.slice(0, 18) + "...";
        }

        const div = document.createElement("div");
        div.className = "team";
        div.style.animationDelay = `${i * 0.1}s`;
        div.innerHTML = `
      <div class="team-name">${userName}</div>
      <div class="team-score">${userScore}</div>
    `;
        scoreboard.appendChild(div);
    }
});

socket.on("scoreUpdate:Vodafone Booth", (data) => {
    console.log("Score update received:");
    
    let scores = JSON.parse(data);
    console.log("Updated scores:", scores.scoresList);

    scores.scoresList.sort((a, b) => b.score - a.score);

    scoreboard.replaceChildren();
    for (let i = 0; i < TOTAL_SLOTS; i++) {
        let userName = scores.scoresList[i]?.username || "TBD";
        let userScore = scores.scoresList[i]?.score !== undefined
            ? scores.scoresList[i].score.toString()
            : "000000";

        if (userName.length > 15) {
            userName = userName.slice(0, 18) + "...";
        }

        const div = document.createElement("div");
        div.className = "team";
        div.style.animationDelay = `${i * 0.1}s`;
        div.innerHTML = `
      <div class="team-name">${userName}</div>
      <div class="team-score">${userScore}</div>
    `;
        scoreboard.appendChild(div);
    }
});
```
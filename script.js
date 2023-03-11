function openingCeremony(sports, callbackFnc) {
  console.log("Let the games begin!");
  setTimeout(() => {
    console.log("Starting scores:");
    console.log(sports);
    race100M(sports, callbackFnc);
  }, 1000);
}

function race100M(sports, callbackFnc) {
  console.log("Starting Race 100M...");
  setTimeout(() => {
    const colors = Object.keys(sports);
    const times = colors.reduce((obj, color) => {
      obj[color] = Math.floor(Math.random() * 6 + 10); // random time between 10-15 seconds
      return obj;
    }, {});
    console.log("Race times:");
    console.log(times);
    const sortedColors = colors.sort((a, b) => times[a] - times[b]);
    sports[sortedColors[0]] += 50; // first place gets 50 points
    sports[sortedColors[1]] += 25; // second place gets 25 points
    console.log("Race results:");
    console.log(sports);
    callbackFnc(sports, longJump);
  }, 3000);
}

function longJump(sports, callbackFnc) {
  console.log("Starting Long Jump...");
  setTimeout(() => {
    const colors = Object.keys(sports);
    const winningColor = colors[Math.floor(Math.random() * colors.length)];
    sports[winningColor] += 150;
    console.log(`${winningColor} won the Long Jump!`);
    console.log("Updated scores:");
    console.log(sports);
    callbackFnc(sports, highJump);
  }, 2000);
}

function highJump(sports, callbackFnc) {
  console.log("Starting High Jump...");
  const userAnswer = prompt("Which color secured the highest jump?");
  if (userAnswer === null || userAnswer === "") {
    console.log("Event was cancelled.");
  } else {
    const chosenColor = userAnswer.toLowerCase();
    if (sports[chosenColor] !== undefined) {
      sports[chosenColor] += 100;
      console.log(`${chosenColor} won the High Jump!`);
    } else {
      console.log("Event was cancelled.");
    }
  }
  console.log("Final scores:");
  console.log(sports);
  callbackFnc(sports, awardCeremony);
}

function awardCeremony(sports) {
  console.log("Award Ceremony time!");
  const sortedScores = Object.entries(sports).sort((a, b) => b[1] - a[1]);
  console.log(
    `${sortedScores[0][0]} came first with ${sortedScores[0][1]} points.`
  );
  console.log(
    `${sortedScores[1][0]} came second with ${sortedScores[1][1]} points.`
  );
  console.log(
    `${sortedScores[2][0]} came third with ${sortedScores[2][1]} points.`
  );
}

const startingScores = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0,
};

openingCeremony(startingScores, race100M);

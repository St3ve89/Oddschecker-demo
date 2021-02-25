const express = require('express');
const app = express();
const cors = require('cors');
const data = require('./data/data.json');
app.use(cors());

const betsList = data.bets;

function filterOddOnMoreThenValue(bets, filteredValue, moreThanTwo) {
  const filteredArray = bets.map((bet) => {
    return {
      name: bet.name,
      betId: bet.betId,
      odds: bet.odds.filter((x) =>
        moreThanTwo === true
          ? x.oddsDecimal > filteredValue
          : x.oddsDecimal < filteredValue
      ),
    };
  });

  return filteredArray.filter((player) => player.odds.length > 0);
}

app.get('/decimalOddsMoreThanTwo', (req, res) => {
  // code here
  res.json(filterOddOnMoreThenValue(betsList, 2, true));
});

app.get('/decimalOddsLessThanTwo', (req, res) => {
  res.json(filterOddOnMoreThenValue(betsList, 2, false));
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});

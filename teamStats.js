const team = {
  _players: [
    {
      firstName: "",
      lastName: "",
      age: 0,
    },
    {
      firstName: "",
      lastName: "",
      age: 0,
    },
    {
      firstName: "",
      lastName: "",
      age: 0,
    },
  ],
  _games: [
    {
      opponent: "",
      teamPoints: 0,
      opponentPoints: 0,
    },
    {
      opponent: "",
      teamPoints: 0,
      opponentPoints: 0,
    },
    {
      opponent: "",
      teamPoints: 0,
      opponentPoints: 0,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const newPlayer = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this._players.push(newPlayer);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const newGame = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(newGame);
  },
};
team.addGame("Titans", 100, 98);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team._players);
console.log(team._games);

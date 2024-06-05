import { convertArrayToCSV } from "convert-array-to-csv";

const addHrIdsToPlayerList = (players, hrPlayers) => {
  // the list of players that will be returned
  // let finalPlayersArray = [];

  let finalPlayersArray = players.map((player) => {
    const hrFindPlayer = hrPlayers.filter(
      (hrPlayer) => hrPlayer.name === player.name
    );
    return {
      ...player,
      ...(hrFindPlayer[0] ? { hrID: hrFindPlayer[0].hrId } : null),
    };
  });

  // hrPlayers.forEach((player) => {

  // })

  return finalPlayersArray;
};

export { addHrIdsToPlayerList };

//  const expectedList = [
//    {
//      id: 8444924,
//      name: "Jim Anderson",
//      hrID: "anderji01",
//    },
//    {
//      id: 8444926,
//      name: "Murray Anderson",
//      hrID: "andermu01",
//    },
//    {
//      id: 8444995,
//      name: "Pete Backor",
//      hrID: "backope01",
//    },
//  ];

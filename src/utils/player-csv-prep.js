import { convertArrayToCSV } from "convert-array-to-csv";

const addHrIdsToPlayerList = (players, hrPlayers) => {
  // the list of players that will be returned
  let finalPlayersArray = players.map((player) => {
    // for each player in the nhl.com list

    // select the player from the hr list
    const hrFindPlayer = hrPlayers.filter((hrPlayer) => {
      // console.log("hr + nhl:", hrPlayer.name, player.name);
      const a = hrPlayer.name.localeCompare(player.name, "en-US", {
        sensitivity: "base",
      });
      // console.log("a:", a);
      return a;
    });

    return {
      ...player,
      ...(hrFindPlayer[0] === 0 ? { hrID: hrFindPlayer[0].hrID } : null),
    };
  });

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

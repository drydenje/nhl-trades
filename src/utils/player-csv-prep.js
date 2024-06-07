import { convertArrayToCSV } from "convert-array-to-csv";
import { writeFile } from "./utils";

const addHrIdsToPlayerList = (players, hrPlayers) => {
  const duplicates = [];

  // the list of players that will be returned
  let finalPlayersArray = players.map((player) => {
    console.log("Player:", player);
    // for each player in the nhl.com list

    // select the player from the hr list
    const hrFindPlayer = hrPlayers.filter((hrPlayer) => {
      const comparison = hrPlayer.name.localeCompare(player.name, "en-US", {
        sensitivity: "base",
      });

      return comparison ? false : true;
    });

    // console.log("FIND:", hrFindPlayer);
    if (hrFindPlayer.length > 1) {
      duplicates.push(player);
      return {
        ...player,
      };
    } else {
      return {
        ...player,
        ...(hrFindPlayer[0] ? { hrID: hrFindPlayer[0].hrID } : null),
      };
    }
  });

  writeFile(`./public/scraped-data/duplicate-ids.json`, duplicates);
  console.log("Duplicates:", duplicates);

  return finalPlayersArray;
};

export { addHrIdsToPlayerList };

// Select the first player without a birthdate
//

const addBirthdayToPlayer = async (playerArray, playerID) => {
  const playerToScrape = playerArray.filter(
    (player) => player.birthDate === undefined
  );
  console.log("PLAYERTOSCRAPE:", playerToScrape);
  const NHL_PLAYER_DETAILS_ENDPOINT = `https://api-web.nhle.com/v1/player/${playerToScrape[0].id}/landing`;

  console.log(NHL_PLAYER_DETAILS_ENDPOINT);

  const playerDetails = await fetch(NHL_PLAYER_DETAILS_ENDPOINT).then(
    (response) => response.json()
  );

  return {
    id: playerDetails.playerId,
    name: `${playerDetails.firstName.default} ${playerDetails.lastName.default}`,
    birthDate: playerDetails.birthDate,
  };
};

export { addBirthdayToPlayer };
